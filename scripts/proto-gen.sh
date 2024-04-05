#!/bin/bash

set -euo pipefail

ROOT_DIR=$(git rev-parse --show-toplevel)
PROTOC_GEN_PATH="${ROOT_DIR}/demo-2/web-client/node_modules/.bin/grpc_tools_node_protoc_plugin"
SRC_DIR="${ROOT_DIR}/proto"
OUT_DIR="${ROOT_DIR}/demo-2/web-client/src/grpc"

protoc \
    --plugin="protoc-gen-grpc=${PROTOC_GEN_PATH}" \
    --proto_path="${SRC_DIR}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --grpc-web_out="import_style=commonjs,mode=grpcwebtext:${OUT_DIR}" \
    $(find "${SRC_DIR}" -iname "*.proto")
