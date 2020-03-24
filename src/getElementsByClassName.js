// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:





var getElementsByClassName = function(className) {
  // input is a class name
  // assign an empty array
  var resultArr = [];

  var recursiveInnerFunction = function(className) {
    // iterate through the document.body
    for (var i = 0; i < sheet.children.length; i++) {
      // if grandDiv[i].classList === className
      if (sheet.children[i].classList === className) {
        // reassign grandDiv to grandDiv[i]
        sheet.children = sheet.children[i];
        // push grandDiv[i] into resultArray
        resultArr.push(sheet.children);
        // invoke recursive inner Function with grandDiv[i] argument
        recursiveInnerFunction(sheet.children.classList);
      }
    }
  };
  return resultArr;
};

