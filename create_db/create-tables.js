const { Knex } = require("../libs/pg")
const Campaigns = require('./campaigns')
const Candidates = require('./candidates')
const VotingHistory = require('./voting_history')

const handler = async () => {
  let campaignIds = await Campaigns.handler()
  await Candidates.handler(campaignIds)
  await VotingHistory.handler()
  console.log("----------Completed----------")
}

module.exports.handler = handler