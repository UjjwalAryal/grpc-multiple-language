# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: math.proto
# Protobuf Python Version: 4.25.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\nmath.proto\x12\x04math\"(\n\nAddRequest\x12\x0c\n\x04num1\x18\x01 \x01(\x05\x12\x0c\n\x04num2\x18\x02 \x01(\x05\"\x1a\n\x0b\x41\x64\x64Response\x12\x0b\n\x03sum\x18\x01 \x01(\x05\x32\x32\n\x04Math\x12*\n\x03\x41\x64\x64\x12\x10.math.AddRequest\x1a\x11.math.AddResponseb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'math_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  _globals['_ADDREQUEST']._serialized_start=20
  _globals['_ADDREQUEST']._serialized_end=60
  _globals['_ADDRESPONSE']._serialized_start=62
  _globals['_ADDRESPONSE']._serialized_end=88
  _globals['_MATH']._serialized_start=90
  _globals['_MATH']._serialized_end=140
# @@protoc_insertion_point(module_scope)
