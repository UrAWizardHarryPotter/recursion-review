// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // assign empty string
  var str = '';
  // scenario if the input is a number
  if (typeof(obj) === 'number') {
    return str + obj;
  }

  // if type of obj is a function, return null
  if (typeof(obj) === 'function') {
    return null;
  }

  // if type of obj is undefined, return undefined
  if (typeof(obj) === 'undefined') {
    return 'undefined';
  }

  // if obj is null, add obj to mutation string
  if (obj === null) {
    return str + obj;
  }

  //if the input is boolean
  if (typeof(obj) === 'boolean') {
    if (obj === true) {
      return 'true';
    } else {
      return 'false';
    }
  }
  //string
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }


  if (Array.isArray(obj)) {
    // assign empty array for results
    var stringedArr = [];
    for (var y = 0; y < obj.length; y++) {
      // return the stirngified versions of each element to emptyArray
      stringedArr.push(stringifyJSON(obj[y]));
    }
    return '[' + stringedArr.join(',') + ']';
  }

  if (typeof(obj) === 'object' && obj) {
    var stringedObj = [];
    for (var key in obj) {
      // hint from spec: JSON does not allow you to stringify functions or undefined values, so you should skip those key/value pairs.
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      } else {
        stringedObj.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + stringedObj.join(',') + '}';
  }
};