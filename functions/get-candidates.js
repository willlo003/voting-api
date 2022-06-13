const response = require("../helpers/response");
const { Knex } = require("../libs/pg");
const _get = require("lodash/get");

const handler = async (event, context) => {
  let campaignId = _get(event, "pathParameters.id", null);

  if (!campaignId) {
    return response.handler(422, false, 4002);
  }

  try {
    let candidates = await Knex.reader.raw(`
      SELECT c.*
      FROM candidates AS c
      WHERE c.campaign_id = ${campaignId}
    `);

    let data = {
      candidates: candidates.rows,
    };
    return response.handler(200, true, 2001, data);
  } catch (e) {
    console.log(e);
    return response.handler(500, false, 5001);
  }
};

module.exports.handler = handler;
