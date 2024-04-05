#!/bin/bash

set -euo pipefail

ROOT_DIR=$(git rev-parse --show-toplevel)
PROTOC_GEN_PATH="${ROOT_DIR}/services/server/node_modules/.bin/grpc_tools_node_protoc_plugin"
SRC_DIR="${ROOT_DIR}/services/proto"
OUT_DIR="${ROOT_DIR}/services/client/grpc"

protoc \
    --plugin="protoc-gen-grpc=${PROTOC_GEN_PATH}" \
    --proto_path="${SRC_DIR}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --grpc-web_out="import_style=commonjs,mode=grpcwebtext:${OUT_DIR}" \
    $(find "${SRC_DIR}" -iname "*.proto")
