const getCryptos = require("../get-cryptos.js");

describe("test", () => {
  test("get-cryptos: success", async () => {
    const result = await getCryptos.handler();
    expect(result.statusCode).toBe(200);
  });

  test("get-cryptos: change-currency-code", async () => {
    let event = {
      queryStringParameters: {
        exchange: "JPY",
      },
    };
    const result = await getCryptos.handler(event);
    const body = JSON.parse(result.body);
    expect(body.data[0].quote).toHaveProperty("JPY");
  });

  test("get-cryptos: wrong-currency-code", async () => {
    let event = {
      queryStringParameters: {
        exchange: "XXXASD",
      },
    };
    const result = await getCryptos.handler(event);
    expect(result.statusCode).toBe(422);
  });
});
