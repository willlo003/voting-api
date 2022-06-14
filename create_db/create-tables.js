const Campaigns = require("./campaigns");
const Candidates = require("./candidates");
const VotingHistory = require("./voting-history");

const handler = async () => {
  await Campaigns.handler();
  await Candidates.handler();
  await VotingHistory.handler();
  console.log("----------Completed----------");
};

module.exports.handler = handler;
