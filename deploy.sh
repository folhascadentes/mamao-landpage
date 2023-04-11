#!/bin/bash

# Build da aplicação
npm run build

# Nome do bucket S3
BUCKET_NAME="mamao-landpage-tashiro"

# Região do bucket S3
REGION="sa-east-1"

# Nome do diretório local com os arquivos do build
BUILD_DIR="build"

# Nome do arquivo com as configurações do CloudFront
CLOUDFRONT_CONFIG="cloudfront-config.json"

# Nome da distribuição CloudFront
CLOUDFRONT_DISTRIBUTION="minha-distribuicao"

# Sincroniza os arquivos do build com o bucket S3
aws s3 sync $BUILD_DIR s3://$BUCKET_NAME --delete --region $REGION

# Cria uma nova distribuição CloudFront
# DISTRIBUTION_ID=$(aws cloudfront create-distribution --distribution-config file://$CLOUDFRONT_CONFIG --query 'Distribution.Id' --output text)

# Espera até que a distribuição esteja totalmente criada
# aws cloudfront wait distribution-deployed --id $DISTRIBUTION_ID

# Atualiza a distribuição CloudFront
# aws cloudfront update-distribution --id $CLOUDFRONT_DISTRIBUTION --distribution-config file://$CLOUDFRONT_CONFIG

# Invalida o cache da distribuição CloudFront
# aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION --paths "/*"
