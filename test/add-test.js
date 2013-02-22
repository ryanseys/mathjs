#!/usr/bin/env node

const vows = require('vows'),
      assert = require("assert"),
      math = require("../math"); // require my math.js library

vows.describe('addition').addBatch({
  'add()' : {
    topic: math.add(),
    'should be NaN': function (topic) {
      assert.ok(true, isNaN(topic));
    }
  },
  'add(42, 0)' : {
    topic: math.add(42, 0),
    'should be 42': function (topic) {
      assert.equal (topic, 42);
    }
  },
  'sum(42, 0)' : {
    topic: math.sum(42, 0),
    'should be 42': function (topic) {
      assert.equal (topic, 42);
    }
  },
  'add(42, 0, 1)' : {
    topic: math.add(42, 0, 1),
    'should be 43': function (topic) {
      assert.equal (topic, 43);
    }
  },
  'add(42, 0, 1, -2)' : {
    topic: math.add(42, 0, 1, -2),
    'should be 41': function (topic) {
      assert.equal (topic, 41);
    }
  },
  'sum(42, 0, 1, -2)' : {
    topic: math.sum(42, 0, 1, -2),
    'should be 41': function (topic) {
      assert.equal (topic, 41);
    }
  }
}).export(module);
