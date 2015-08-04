var Node = require('./node');

// be able to insert a number
function BinarySearchTree () {
  this.root = null;
}

BinarySearchTree.prototype.insert = function (value, currentNode) {
  currentNode = currentNode || this.root;

  if (!currentNode) {
    this.root = new Node(value);
    return this;
  }

  return this.checkNodes(value, currentNode, function(direction) {
    if (!currentNode[direction]) {
      currentNode[direction] = new Node(value);
      return this;
    } else {
      return this.insert(value, currentNode[direction]);
    }
  });

};


BinarySearchTree.prototype.includes = function (value, currentNode) {
  // Start by searching at the root
  currentNode = currentNode || this.root;

  if (!currentNode) { return false; }
  if (currentNode.value === value) { return true; }

  return this.checkNodes(value, currentNode, function(direction) {
    if (currentNode[direction]) { return this.includes(value, currentNode[direction]);}
    return false;
  });
};

BinarySearchTree.prototype.checkNodes = function (value, currentNode, callback) {
  var direction;

  if (value < currentNode.value) { direction = "left"; } 
  if (value > currentNode.value) { direction = "right"; } 

  return callback.call(this, direction);
};


module.exports = BinarySearchTree;
