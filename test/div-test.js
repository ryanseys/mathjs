#!/usr/bin/env node

const vows = require('vows'),
      assert = require("assert"),
      math = require("../math"); // require my math.js library

vows.describe('division').addBatch({
  'div()' : {
    topic: math.div(),
    'should be NaN': function (topic) {
      assert.ok(true, isNaN(topic));
    }
  },
  'div(42, 0)' : {
    topic: math.div(42, 0),
    'should be Infinity': function (topic) {
      assert.equal (topic, Infinity);
    }
  },
  'div(-42, 0)' : {
    topic: math.div(42, 0),
    'should be Infinity': function (topic) {
      assert.equal (topic, Infinity);
    }
  },
  'div(42, 2)' : {
    topic: math.div(42, 2),
    'should be 21': function (topic) {
      assert.equal (topic, 21);
    }
  },
  'div(0, 0)' : {
    topic: math.div(0, 0),
    'should be NaN': function (topic) {
      assert.ok(true, isNaN(topic));
    }
  },
  'div(0, 1)' : {
    topic: math.div(0, 1),
    'should be 0': function (topic) {
      assert.equal (topic, 0);
    }
  },
  'div(1, 1)' : {
    topic: math.div(1, 1),
    'should be 1': function (topic) {
      assert.equal (topic, 1);
    }
  },
  'div(1, 4)' : {
    topic: math.div(1, 4),
    'should be 0.25': function (topic) {
      assert.equal (topic, 0.25);
    }
  },
  'div(4, 2)' : {
    topic: math.div(4, 2),
    'should be 2': function (topic) {
      assert.equal (topic, 2);
    }
  },
  'div(Infinity, Infinity)' : {
    topic: math.div(Infinity, Infinity),
    'should be NaN': function (topic) {
      assert.ok(true, isNaN(topic));
    }
  },
  'div(0, Infinity)' : {
    topic: math.div(0, Infinity),
    'should be 0': function (topic) {
      assert.equal (topic, 0);
    }
  }
}).export(module);
