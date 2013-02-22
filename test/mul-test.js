#!/usr/bin/env node

const vows = require('vows'),
      assert = require("assert"),
      math = require("../math"); // require my math.js library

vows.describe('multiplication').addBatch({
  'mul()': {
    topic : math.mul(),
    'should be NaN' : function(topic) {
      assert.ok(true, isNaN(topic));
    }
  },
  'mul(0, 0)': {
    topic : math.mul(0, 0),
    'should be 0' : function(topic) {
      assert.equal(topic, 0);
    }
  },
  'mul(0, 1)': {
    topic : math.mul(0, 1),
    'should be 0' : function(topic) {
      assert.equal(topic, 0);
    }
  },
  'mul(1, 1)': {
    topic : math.mul(1, 1),
    'should be 1' : function(topic) {
      assert.equal(topic, 1);
    }
  },
  'mul(5, 3)': {
    topic : math.mul(5, 3),
    'should be 15' : function(topic) {
      assert.equal(topic, 15);
    }
  },
  'mul(5, 3, 3)': {
    topic : math.mul(5, 3, 3),
    'should be 45' : function(topic) {
      assert.equal(topic, 45);
    }
  },
  'mul(3, 2, 3)': {
    topic : math.mul(3, 2, 3),
    'should be 18' : function(topic) {
      assert.equal(topic, 18);
    }
  }
}).export(module);
