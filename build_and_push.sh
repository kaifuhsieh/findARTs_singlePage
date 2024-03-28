#!/bin/sh

# 定義打包平台
PLATFORM="linux/amd64"
echo "Building Platform: $PLATFORM"

# 定義映像名稱
SYSTEM=ow
IMAGE_NAME="asia-east1-docker.pkg.dev/findarts-418413/findarts/$SYSTEM"
echo "Building System: $IMAGE_NAME"

# 定義映像標籤
TAG=v1
echo "Building Versin: $TAG"

# 建立 Docker 映像並添加標籤
echo "Building and pushing the Docker image..."
docker build --platform $PLATFORM -t $IMAGE_NAME:$VERSION .

# 登入 Docker Hub
echo "Please enter your Docker Hub credentials:"
docker login

# 將映像推送到 GCP
echo "Pushing the Docker image..."
docker push $IMAGE_NAME:$TAG
