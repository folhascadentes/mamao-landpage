# Mamão Landpage

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `./deploy.sh`

We currently have a deploy.sh script for deploying the application to an AWS environment. Create a .env file with the following variables

```bash
AWS_REGION=AWS_REGION
S3_BUCKET_NAME=NAME_OF_BUCKET_THAT_WILL_DEPLOY
CLOUDFRONT_DISTRIBUTION_ID=ID_OF_CLOUD_DISTRIBUTION
```
