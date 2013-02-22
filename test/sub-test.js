#!/usr/bin/env node

const vows = require('vows'),
      assert = require("assert"),
      math = require("../math"); // require my math.js library

vows.describe('subtraction').addBatch({
  'sub()' : {
    topic: math.sub(),
    'should be NaN': function (topic) {
      assert.ok(true, isNaN(topic));
    }
  },
  'sub(42, 0)' : {
    topic: math.sub(42, 0),
    'should be 42': function (topic) {
      assert.equal (topic, 42);
    }
  },
  'sub(42, 2)' : {
    topic: math.sub(42, 2),
    'should be 40': function (topic) {
      assert.equal (topic, 40);
    }
  },
  'sub(0, 0)' : {
    topic: math.sub(0, 0),
    'should be 0': function (topic) {
      assert.equal (topic, 0);
    }
  },
  'sub(0, 1)' : {
    topic: math.sub(0, 1),
    'should be -1': function (topic) {
      assert.equal (topic, -1);
    }
  },
  'sub(Infinity, Infinity)' : {
    topic: math.sub(Infinity, Infinity),
    'should be NaN': function (topic) {
      assert.ok(true, isNaN(topic));
    }
  }
}).export(module);
