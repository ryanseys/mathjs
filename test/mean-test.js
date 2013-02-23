#!/usr/bin/env node

const vows = require('vows'),
      assert = require("assert"),
      math = require("../math"); // require my math.js library

vows.describe('mean').addBatch({
  'mean([1, 2, 3])' : {
    topic: math.mean([1, 2, 3]),
    'should be 2': function (topic) {
      assert.equal(2, topic);
    }
  }
}).export(module);

