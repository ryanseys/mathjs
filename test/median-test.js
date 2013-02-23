#!/usr/bin/env node

const vows = require('vows'),
      assert = require("assert"),
      math = require("../math"); // require my math.js library

vows.describe('median').addBatch({
  'median([1, 2, 3])' : {
    topic: math.median([1, 2, 3]),
    'should be 2': function (topic) {
      assert.equal(topic, 2);
    }
  },
  'median([1, 2])' : {
    topic: math.median([1, 2]),
    'should be 1.5': function (topic) {
      assert.equal(topic, 1.5);
    }
  },
  'median([1])' : {
    topic: math.median([1]),
    'should be 1': function (topic) {
      assert.equal(topic, 1);
    }
  },
  'median([3, 1, 2])' : {
    topic: math.median([3, 1, 2]),
    'should be 2': function (topic) {
      assert.equal(topic, 2);
    }
  },
  'median([45])' : {
    topic: math.median([45]),
    'should be 45': function (topic) {
      assert.equal(topic, 45);
    }
  }
}).export(module);
