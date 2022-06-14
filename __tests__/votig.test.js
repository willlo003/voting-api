const getCampaigns = require("../functions/get-campaigns.js");
const getCandidates = require("../functions/get-candidates.js");
const getResult = require("../functions/get-result");
const vote = require("../functions/vote");
const Knex = require("../libs/pg");

jest.mock("pg", () => {
  const mClient = {
    connect: jest.fn(),
    query: jest.fn(),
    end: jest.fn(),
  };
  return { Knex: jest.fn(() => mClient) };
});

let knex;
beforeEach(() => {
  knex = Knex.reader;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("test", () => {
  test("get-campaigns: success", async () => {
    let omg = await knex.reader.select("*").from("campaigns");
    console, log("omg", omg);
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
    let event = {
      pathParameters: {
        id: 1,
      },
    };
    const result = await getResult.handler(event);
    expect(result.statusCode).toBe(200);
  });
});
