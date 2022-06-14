require("dotenv").config();
const { Knex } = require("../libs/pg");
const fs = require("fs-extra");

const handler = async () => {
  let tableName = "candidates";
  let prizePath = `./seeds/${tableName}.json`;
  console.log(`start creating ${tableName} table`);

  await Knex.writer.raw(`DROP TABLE IF EXISTS ${tableName}`);

  await Knex.writer.raw(`CREATE TABLE ${tableName} (
      id INT NOT NULL UNIQUE,
      campaign_id INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      img_url TEXT NOT NULL
    )`);
  let fakeDate = JSON.parse(await fs.readFileSync(prizePath));

  let insertDate = await Knex.writer(tableName).insert(fakeDate).returning("*");
  console.log(
    `completed creating ${tableName}, inserting ${insertDate.length} rows of data into ${tableName}`
  );
  return;
};

module.exports.handler = handler;
