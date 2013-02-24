#!/usr/bin/env node

const vows = require('vows'),
      assert = require("assert"),
      math = require("../math"); // require my math.js library

vows.describe('multiplication').addBatch({
  'mode([0, 1, 2, 3, 1])': {
    topic : math.mode([0, 1, 2, 3, 1]),
    'should be 1' : function(topic) {
      assert.equal(topic, 1);
    }
  },
  'mode([0, 1, 2, 3, 1, 2, 2])': {
    topic : math.mode([0, 1, 2, 3, 1, 2, 2]),
    'should be 2' : function(topic) {
      assert.equal(topic, 2);
    }
  },
  'mode([0])': {
    topic : math.mode([0]),
    'should be 0' : function(topic) {
      assert.equal(topic, 0);
    }
  },
  'mode([0, 1])': { /* */
    topic : math.mode([0, 1]),
    'should be 1' : function(topic) {
      assert.equal(topic, 1);
    }
  }
}).export(module);
