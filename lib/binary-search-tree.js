var Node = require('./node');

// be able to insert a number
function BinarySearchTree () {
  this.root = null;
}

BinarySearchTree.prototype.insert = function (value) {

  if (this.root === null) {
    this.root = new Node(value);
    return this;
  }

  this.compare(this.root, value);

};

BinarySearchTree.prototype.compare = function (node, value) {
  if (value < node.value) {
    if (this.hasLeftNode(node)) {
      node.left = new Node(value);
    } else {
      this.compare(node.left, value);
    }
  }

  if (value > node.value) {
    if (this.hasRightNode(node)) {
      node.right = new Node(value);
    } else {
      this.compare(node.right, value);
    }
  }

};

BinarySearchTree.prototype.hasLeftNode = function (node) {
  return node.left === null;
};

BinarySearchTree.prototype.hasRightNode = function (node) {
  return node.right === null;
};

BinarySearchTree.prototype.includes = function (value, currentNode) {
  currentNode = currentNode || this.root;

  if (!currentNode) { return false;}
  if (currentNode.value === value) {return true;}

  if (value < currentNode.value) {
    if (this.hasLeftNode) {
      return this.includes(value, currentNode.left);
    }
  }

  if (value > currentNode.value) {
    if (this.hasRightNode) {
      return this.includes(value, currentNode.right);
    }
  }

};



module.exports = BinarySearchTree;
