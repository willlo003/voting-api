require("dotenv").config();
const { Knex } = require("../libs/pg") 
const fs = require("fs-extra");


const handler = async (campaignIds) => {
  let tableName = 'campaigns'
  let prizePath = `../seeds/${tableName}.json`;

  console.log(`start creating ${tableName} table`)

  await Knex.writer
    .raw(`DROP TABLE IF EXISTS ${tableName}`)

  await Knex.writer
    .raw(`CREATE TABLE ${tableName} (
      id UUID DEFAULT uuid_generate_v4 () PRIMARY KEY,
      campaign_id UUID NOT NULL,
      name VARCHAR(255) NOT NULL UNIQUE
    )`)

  let fakeDate = JSON.parse(
    await fs.readFileSync(prizePath)
  );

  let insertDate = await Knex.writer(tableName).insert(fakeDate).returning('*')
  console.log(`completed creating ${tableName}, inserting ${insertDate.length} rows of data into ${tableName}`)
  return insertDate
};

module.exports.handler = handler;