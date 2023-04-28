#!/bin/bash

# Build da aplicação
npm run build

# Nome do bucket S3
BUCKET_NAME="mamao-landpage-tashiro"

# Região do bucket S3
REGION="sa-east-1"

# Nome do diretório local com os arquivos do build
BUILD_DIR="build"

# Nome da distribuição CloudFront
CLOUDFRONT_DISTRIBUTION="EE7HOT45Y65FF"

# Sincroniza os arquivos do build com o bucket S3
aws s3 sync $BUILD_DIR s3://$BUCKET_NAME --delete --region $REGION

# Atualiza a distribuição CloudFront
aws cloudfront update-distribution --id $CLOUDFRONT_DISTRIBUTION

# Invalida o cache da distribuição CloudFront
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION --paths "/*"
