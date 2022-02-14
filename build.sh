#!/bin/bash
basedir=$(cd "$(dirname "$0")";pwd);
npm i && npm run build && cd dist && zip -r ../code.zip . && cd .. && zip code.zip serverless.js && rm -rf dist;
