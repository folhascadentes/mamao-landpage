#!/bin/bash

source .env

npm run build

REGION=$AWS_REGION
BUCKET_NAME=$S3_BUCKET_NAME
CLOUDFRONT_DISTRIBUTION=$CLOUDFRONT_DISTRIBUTION_ID

aws s3 sync build/ s3://$BUCKET_NAME --delete --region $REGION
aws cloudfront update-distribution --id $CLOUDFRONT_DISTRIBUTION
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION --paths "/*"

echo "Deploy concluído com sucesso!"
