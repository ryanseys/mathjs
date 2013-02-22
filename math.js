/* Add named functions for built-in operators */
exports.add = function(x, y) {
  return x + y;
};

exports.sub = function(x, y) {
  return x - y;
};

exports.mul = function(x, y) {
  return x * y;
};

exports.div = function(x, y) {
  return x / y;
};

exports.mod = function(x, y) {
  return x % y;
}

/* Exactly mimic built in functions */
exports.pow = Math.pow;
exports.abs = Math.abs;
exports.acos = Math.acos;
exports.asin = Math.asin;
exports.atan = Math.atan;
exports.atan2 = Math.atan2;
exports.ceil = Math.ceil;
exports.cos = Math.cos;
exports.exp = Math.exp;
exports.floor = Math.floor;
exports.log = Math.log;
exports.max = Math.max;
exports.min = Math.min;
exports.random = Math.random;
exports.round = Math.round;
exports.sin = Math.sin
exports.sqrt = Math.sqrt;
exports.tan = Math.tan;
