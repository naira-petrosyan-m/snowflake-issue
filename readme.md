# Snowflake account info
1. My snowflake account has a user role created.
2. A database and a schema are created in the account.
3. The role is granted with usage permissions to database, to schema.
4. The role is granted with select, insert, update permissions on existing tables and future tables.
5. Files stage is created in the schema. 
6. Write and read permissions to above stage are set for the role created in 1st point.
7. A user is created and the same above role is assigned to that user.
8. Or a user with ACCOUNTADMIN role can be tested, it gives the same results.

# Conflict with Google credentials

* create an `.env` file, put variables according to `.env.example`
* login to Google CLI using the doc from Google, <a href="https://cloud.google.com/docs/authentication/application-default-credentials#personal">click here</a>.
* run `node index.js` or `npm start`
* Error we get is:
  `
  Error: Error: USER does not have storage.objects.get access to the Google Cloud Storage object. Permission 'storage.objects.get' denied on resource (or it may not exist). file=test.json, real file=REST_OF_PATH  `


# No conflict with Google credentials, but error when putting a file

* create an `.env` file, put variables according to `.env.example`
* create a `conf.json` file where Google credentials are put.
* add `GOOGLE_APPLICATION_CREDENTIALS` variable in `.env` file which should be the path to above created `conf.json` file.
  * E.g. `GOOGLE_APPLICATION_CREDENTIALS=./conf.js`
* run `node index.js` or `npm start`
* Error we get is: 
`
AxiosError: Request failed with status code 404 file=test.json, real file=REST_OF_PATH
`

