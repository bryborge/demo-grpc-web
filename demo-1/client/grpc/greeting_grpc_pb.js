// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var greeting_pb = require('./greeting_pb.js');

function serialize_greeting_HelloReply(arg) {
  if (!(arg instanceof greeting_pb.HelloReply)) {
    throw new Error('Expected argument of type greeting.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeting_HelloReply(buffer_arg) {
  return greeting_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeting_HelloRequest(arg) {
  if (!(arg instanceof greeting_pb.HelloRequest)) {
    throw new Error('Expected argument of type greeting.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greeting_HelloRequest(buffer_arg) {
  return greeting_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The service definition.
var GreeterService = exports.GreeterService = {
  sayHello: {
    path: '/greeting.Greeter/sayHello',
    requestStream: false,
    responseStream: false,
    requestType: greeting_pb.HelloRequest,
    responseType: greeting_pb.HelloReply,
    requestSerialize: serialize_greeting_HelloRequest,
    requestDeserialize: deserialize_greeting_HelloRequest,
    responseSerialize: serialize_greeting_HelloReply,
    responseDeserialize: deserialize_greeting_HelloReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
