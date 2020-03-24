// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:





var getElementsByClassName = function(className) {
  // input is a class name
  // assign an empty array
  var resultArr = [];

  var recursiveInnerFunction = function(child) {
    var split = child.className.split(' ');
    // if childs.className === className
    if (split.indexOf(className) >= 0) {
      // push child into resultArray
      resultArr.push(child);
    }

    // iterate over child's children
    for (var i = 0; i < child.children.length; i++) {
      // invoke recursiveInnerFunction by calling child at i
      recursiveInnerFunction(child.children[i]);
    }
  };
  // invoke recursiveInnerFunction by calling document.body
  recursiveInnerFunction(document.body);
  // return resultArr
  return resultArr;
};

