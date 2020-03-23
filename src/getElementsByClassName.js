// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var parent = document.body;

  var expectedNodeList = document.getElementsByClassName('targetClassName');
  var expectedArray = Array.prototype.slice.apply(expectedNodeList);
  console.log(expectedArray);

};

getElementsByClassName();

