#!/bin/bash

# Set variables
BUCKET_NAME=""
BUILD_DIR="build/client"

# Step 1: Install dependencies and build the Remix app
echo "Installing dependencies..."
pnpm install

echo "Building the Remix app..."
pnpm run build

# Step 2: Sync the build directory to the S3 bucket
echo "Deploying to S3 bucket: $BUCKET_NAME"
aws s3 sync $BUILD_DIR s3://$BUCKET_NAME --delete

echo "Deployment PRODUCTION complete. Visit: http://$BUCKET_NAME.s3-website-us-east-1.amazonaws.com/"