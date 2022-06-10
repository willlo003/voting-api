require("dotenv").config();
const { Knex } = require("../libs/pg") 
const fs = require("fs-extra");


const handler = async () => {
  let tableName = 'campaigns'
  let prizePath = `../seeds/${tableName}.json`;
  let campaignIds = {}
  
  console.log(`start creating ${tableName} table`)

  await Knex.writer
    .raw(`DROP TABLE IF EXISTS ${tableName}`)

  await Knex.writer
    .raw(`CREATE TABLE ${tableName} (
      id UUID DEFAULT uuid_generate_v4 () PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      start_date VARCHAR(50) DEFAULT NULL,
      end_date VARCHAR(50) DEFAULT NULL
    )`)

  let fakeDate = JSON.parse(
    await fs.readFileSync(prizePath)
  );

  let insertDate = await Knex.writer(tableName).insert(fakeDate).returning('*')
  insertDate.map(o => campaignIds[o.name] = o.id)
  console.log(`completed creating ${tableName}, inserting ${insertDate.length} rows of data into ${tableName}`)
  return campaignIds
};

module.exports.handler = handler;