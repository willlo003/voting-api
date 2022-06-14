const response = require("../helpers/response");
const { Knex } = require("../libs/pg");
const _get = require("lodash/get");
const _isEmpty = require("lodash/isEmpty");
const moment = require("moment");
const hkidValidator = require("hkid");

const handler = async (event, context) => {
  let body = JSON.parse(event.body);
  let campaignId = _get(body, "campaign_id", null);
  let hkid = _get(body, "hkid", null);
  let votedCandidateId = _get(body, "voted_candidate_id", null);

  console.log(body);
  if (!campaignId || !hkid || !votedCandidateId) {
    return response.handler(400, false, 4002);
  }

  //check date is valid
  let campaign = await Knex.reader("campaigns").where("id", campaignId).first();

  if (!campaign) {
    return response.handler(422, false, 4225);
  }

  if (!moment().isBetween(campaign.start_date, campaign.end_date)) {
    return response.handler(422, false, 4221);
  }

  if (!hkidValidator.validate(hkid)) {
    return response.handler(422, false, 4222);
  }

  let history = await Knex.reader("voting_history")
    .where({
      hkid: hkid,
      campaign_id: campaignId,
    })
    .limit(1);

  if (!_isEmpty(history)) {
    return response.handler(422, false, 4223);
  }

  try {
    let result = await Knex.writer
      .insert({
        hkid: hkid,
        voted_candidate_id: votedCandidateId,
        campaign_id: campaignId,
      })
      .into("voting_history")
      .returning("*");

    let data = {
      result: result,
    };
    return response.handler(200, true, 2001, data);
  } catch (e) {
    console.log(e);
    return response.handler(500, false, 5001);
  }
};

module.exports.handler = handler;
