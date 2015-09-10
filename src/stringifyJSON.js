// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (Array.isArray(obj)) {
    obj = obj.map(function(item) {
      return stringifyJSON(item);
    });
    return '[' + obj + ']';
  }
  if (obj && typeof obj === 'object') {
    var stringified = [];
    for (var x in obj) {
      if (obj[x] === undefined || typeof obj[x] === 'function') {
        continue;
      }
      stringified.push(stringifyJSON(x) + ":" + stringifyJSON(obj[x]));
    }
    return '{' + stringified.join() + '}';
  }
  if (typeof obj === 'string') {
    return  '"' + obj + '"';
  }
  return '' + obj;
};

