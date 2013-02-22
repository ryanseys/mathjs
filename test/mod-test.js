#!/usr/bin/env node

const vows = require('vows'),
      assert = require("assert"),
      math = require("../math"); // require my math.js library

vows.describe('modulo').addBatch({
  'mod()' : {
    topic: math.mod(),
    'should be NaN': function (topic) {
      assert.ok(true, isNaN(topic));
    }
  },
  'mod(42, 0)' : {
    topic: math.mod(42, 0),
    'should be NaN': function (topic) {
      assert.ok(true, isNaN(topic));
    }
  },
  'mod(42, 1)' : {
    topic: math.mod(42, 1),
    'should be 0': function (topic) {
      assert.equal (topic, 0);
    }
  },
  'mod(0, 0)' : {
    topic: math.mod(0, 0),
    'should be NaN': function (topic) {
      assert.ok(true, isNaN(topic));
    }
  },
  'mod(0, 1)' : {
    topic: math.mod(0, 1),
    'should be 0': function (topic) {
      assert.equal (topic, 0);
    }
  },
  'mod(1, 1)' : {
    topic: math.mod(1, 1),
    'should be 0': function (topic) {
      assert.equal (topic, 0);
    }
  },
  'mod(1, 2)' : {
    topic: math.mod(1, 2),
    'should be 1': function (topic) {
      assert.equal (topic, 1);
    }
  },
  'mod(Infinity, Infinity)' : {
    topic : math.mod(Infinity, Infinity),
    'should be NaN' : function(topic) {
      assert.ok(true, isNaN(topic));
    }
  }
}).export(module);
