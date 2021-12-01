#!/usr/bin/env bash
set -euo pipefail

# Local protobuf modules
protoc \
    --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    --ts_proto_out=. \
    --ts_proto_opt=forceLong=long \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_opt=env=browser \
    ./messages.proto
