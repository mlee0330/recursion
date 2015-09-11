// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var elements = [];

  var hasClass = function(node) {
  	if (node.classList) {
  		return (node.classList.contains(className));
  	}
  };

  var traverse = function(node) {
  	if (hasClass(node)) {
  		elements.push(node);
  	}
  	for (var i = 0; i < node.childNodes.length; i++) {
  		traverse(node.childNodes[i]);
  	}
  };

  traverse(document.body);

  return elements;
};
