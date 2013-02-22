var assert = require("assert")
var math = require("../math.js") // require my math.js library

describe('math.add(4, 3)', function() {
  it('should return 7', function() {
    assert.equal(7, math.add(4, 3));
    assert.equal(7, math.add(3, 4));
    assert.equal(0, math.add(-1, 1));
  });
});
