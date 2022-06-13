const response = require("../helpers/response");
const { Knex } = require("../libs/pg");
const _get = require("lodash/get");

const handler = async (event, context) => {
  try {
    let campaigns = await Knex.reader.raw(`
      SELECT c.*, count(c.name) AS voted_qty
      FROM campaigns AS c
      LEFT JOIN voting_history AS vh
      ON vh.campaign_id = c.id
      GROUP BY c.name, c.start_date, c.end_date, c.id
      ORDER BY c.end_date DESC
    `);

    let data = {
      campaigns: campaigns.rows,
    };
    return response.handler(200, true, 2001, data);
  } catch (e) {
    console.log(e);
    return response.handler(500, false, 5001);
  }
};

module.exports.handler = handler;
