#!/usr/bin/env node

const vows = require('vows'),
      assert = require("assert"),
      math = require("../math"); // require my math.js library

vows.describe('maximum').addBatch({
  'max()': {
    topic : math.max(),
    'should be -Infinity' : function(topic) {
      assert.equal(topic, -Infinity);
    }
  },
  'max(0, 0)': {
    topic : math.max(0, 0),
    'should be 0' : function(topic) {
      assert.equal(topic, 0);
    }
  },
  'max(0, 1)': {
    topic : math.max(0, 1),
    'should be 1' : function(topic) {
      assert.equal(topic, 1);
    }
  },
  'max(5, 6, 7)': {
    topic : math.max(5, 6, 7),
    'should be 7' : function(topic) {
      assert.equal(topic, 7);
    }
  },
  'max(5, 6, 7, -8)': {
    topic : math.max(5, 6, 7, -8),
    'should be 7' : function(topic) {
      assert.equal(topic, 7);
    }
  }
}).export(module);
