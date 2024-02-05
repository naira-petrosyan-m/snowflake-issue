# Snowflake account info
1. User that I am using in this setup has a role which was assigned a read and write access to stages.
2. I have tried also with ACCOUNTADMIN role user, which had the same error as the above user. 

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

