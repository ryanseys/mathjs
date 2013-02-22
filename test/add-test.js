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
  }
}).export(module);
