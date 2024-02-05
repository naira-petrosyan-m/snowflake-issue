require('dotenv').config();

const snowflake = require('snowflake-sdk');
const connection = snowflake.createConnection({

  account: process.env.SNOWFLAKE_ACCOUNT,

  username: process.env.SNOWFLAKE_USERNAME,

  password: process.env.SNOWFLAKE_PASSWORD,

  database: process.env.SNOWFLAKE_DATABASE,

  schema: process.env.SNOWFLAKE_SCHEMA

});

connection.connect((err, conn) => {

  if (err) {

    console.error('Unable to connect: ' + err.message);

  } else {

    console.log('Successfully connected to Snowflake.');

  }

});

connection.execute({
  sqlText: `PUT file://test.json @${process.env.SNOWFLAKE_SCHEMA}.ph_stage`,
  binds: [],
  complete: (err, stmt, rows) => {
    console.log('err', err);
    console.log('rows', rows);
  },
});

