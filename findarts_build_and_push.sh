#!/bin/bash

# 定義映像名稱、標籤和平台
IMAGE_NAME="kk2229/findarts"
TAG="v1"
PLATFORM="linux/amd64"

# 建立 Docker 映像並添加標籤
docker build --platform=${PLATFORM} -t ${IMAGE_NAME}:${TAG} .

# 登入 Docker Hub
echo "Please enter your Docker Hub credentials:"
docker login

# 將映像推送到 Docker Hub
docker push ${IMAGE_NAME}:${TAG}
