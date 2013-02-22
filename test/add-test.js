#!/usr/bin/env node

const vows = require('vows'),
      assert = require("assert"),
      math = require("../math"); // require my math.js library

vows.describe('simple addition').addBatch({
  'add(42, 0)' : {
    topic: math.add(42, 0),
    'should be equal to 42': function (topic) {
      assert.equal (topic, 42);
    }
  },
  'add(42, 0, 1)' : {
    topic: math.add(42, 0, 1),
    'should be equal to 43': function (topic) {
      assert.equal (topic, 43);
    }
  },
  'add(42, 0, 1, -2)' : {
    topic: math.add(42, 0, 1, -2),
    'should be equal to 41': function (topic) {
      assert.equal (topic, 41);
    }
  }
}).export(module);

vows.describe('maximum').addBatch({
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
