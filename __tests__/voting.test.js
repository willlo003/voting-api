const getCampaigns = require("../functions/get-campaigns.js");
const getCandidates = require("../functions/get-candidates.js");
const getResult = require("../functions/get-result");
const vote = require("../functions/vote");
const createTables = require("../create_db/create-tables");
const hkid = require("hkid");

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

beforeAll(async () => {
  await createTables.handler();
});

afterAll(async () => {
  await createTables.handler();
});

describe("test", () => {
  test("get-campaigns: success", async () => {
    const result = await getCampaigns.handler();
    expect(result.statusCode).toBe(200);
  });
  test("get-candidates: success", async () => {
    let event = {
      pathParameters: {
        id: 1,
      },
    };
    const result = await getCandidates.handler(event);
    expect(result.statusCode).toBe(200);
  });
  test("get-result: success", async () => {
    let event = {
      pathParameters: {
        id: 1,
      },
    };
    const result = await getResult.handler(event);
    expect(result.statusCode).toBe(200);
  });
  test("vote: success", async () => {
    const result = await vote.handler({
      body: `{"hkid": "${hkid.random()}", "campaign_id": 1, "voted_candidate_id": 1}`,
    });
    expect(result.statusCode).toBe(200);
  });
  test("vote: id repeated", async () => {
    let fakeHkid = hkid.random();
    await vote.handler({
      body: `{"hkid": "${fakeHkid}", "campaign_id": 1, "voted_candidate_id": 1}`,
    });
    await delay(500);
    const result = await vote.handler({
      body: `{"hkid": "${fakeHkid}", "campaign_id": 1, "voted_candidate_id": 1}`,
    });
    expect(JSON.parse(result.body).message_code).toBe(4223);
  });
  test("vote: campaign not exist", async () => {
    const result = await vote.handler({
      body: `{"hkid": "${hkid.random()}", "campaign_id": 100, "voted_candidate_id": 1}`,
    });
    expect(JSON.parse(result.body).message_code).toBe(4225);
  });
  test("vote: campaign is expired", async () => {
    const result = await vote.handler({
      body: `{"hkid": "${hkid.random()}", "campaign_id": 5, "voted_candidate_id": 1}`,
    });
    console.log("result", result)
    expect(JSON.parse(result.body).message_code).toBe(4221);
  });
  test("vote: invalid hkid", async () => {
    const result = await vote.handler({
      body: `{"hkid": "123", "campaign_id": 1, "voted_candidate_id": 1}`,
    });
    console.log("result", result)
    expect(JSON.parse(result.body).message_code).toBe(4222);
  });
});
