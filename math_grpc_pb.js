// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var math_pb = require('./math_pb.js');

function serialize_math_AddRequest(arg) {
  if (!(arg instanceof math_pb.AddRequest)) {
    throw new Error('Expected argument of type math.AddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_math_AddRequest(buffer_arg) {
  return math_pb.AddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_math_AddResponse(arg) {
  if (!(arg instanceof math_pb.AddResponse)) {
    throw new Error('Expected argument of type math.AddResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_math_AddResponse(buffer_arg) {
  return math_pb.AddResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Math service definition.
var MathService = exports.MathService = {
  // A simple RPC method to add two numbers.
add: {
    path: '/math.Math/Add',
    requestStream: false,
    responseStream: false,
    requestType: math_pb.AddRequest,
    responseType: math_pb.AddResponse,
    requestSerialize: serialize_math_AddRequest,
    requestDeserialize: deserialize_math_AddRequest,
    responseSerialize: serialize_math_AddResponse,
    responseDeserialize: deserialize_math_AddResponse,
  },
};

exports.MathClient = grpc.makeGenericClientConstructor(MathService);
