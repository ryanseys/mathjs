/* Add named functions for built-in operators */
exports.add = function() {
  if(!arguments.length) return NaN;
  var sum = 0,
    i = arguments.length;
  while(i--) sum += arguments[i];
  return sum;
};

exports.sub = function(x, y) {
  if(!arguments.length) return NaN;
  return x - y;
};

exports.mul = function() {
  if(!arguments.length) return NaN;
  var product = 1,
    i = arguments.length;
  while(i--) product *= arguments[i];
  return product;
};

exports.div = function(x, y) {
  if(!arguments.length) return NaN;
  return x / y;
};

exports.mod = function(x, y) {
  if(!arguments.length) return NaN;
  return x % y;
};

exports.mean = function(arr) {
  var len = arr.length;
  var sum = exports.sum(arr);
  return sum/len;
};

/* sorts numbers */
exports.sort = function(arr) {
  return arr.sort(function (a, b){
    return a - b;
  });
};

exports.median = function(arr) {

  arr = exports.sort(arr);
  var median,
      len = arr.length,
      len_div = Math.floor(len/2);
  if(len == 0) return NaN;
  else if(len % 2 == 1) {
    median = arr[len_div];
  }
  else {
    median = exports.mean([arr[len_div-1], arr[len_div]]);
  }
  return median;
};

exports.mode = function(arr) {
  var counts = {};
  var max = 0;
  var max_val;
  var current_val;
  for(var i = arr.length-1; i >= 0; i--) {
    current_val = arr[i];
    if(!counts[current_val]) counts[current_val] = 1;
    else counts[current_val] += 1;
    if(max < counts[current_val]) {
      max = counts[current_val];
      max_val = current_val;
    }
  }
  return max_val;
}

exports.sum = function(arr) {
  return exports.add.apply(exports.add, arr);
};

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

/* Built-in constants */
exports.E = Math.E;
exports.LN2 = Math.LN2;
exports.LN10 = Math.LN10;
exports.LOG2E = Math.LOG2E;
exports.LOG10E = Math.LOG10E;
exports.PI = Math.PI;
exports.SQRT1_2 = Math.SQRT1_2;
exports.SQRT2 = Math.SQRT2;
