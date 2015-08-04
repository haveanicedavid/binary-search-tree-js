var assert           = require('assert');
var BinarySearchTree = require('../lib/binary-search-tree');
var Node             = require('../lib/node');

describe('Binary Search Tree', function() {

  it('should be a function', function () {
    assert.equal(typeof BinarySearchTree , 'function') ;
  });

  it('When a tree starts out, its root is null', function () {
    var bst = new BinarySearchTree();
    assert.equal(bst.root, null) ;
  });

  it('can insert a node and by default it gets assigned to root', function () {
    var bst = new BinarySearchTree();
    bst.insert(4);

    assert.equal(typeof bst.root, 'object');
    assert.equal(bst.root.value, 4);
  });

  it('it sorts values smaller than root to the left', function () {
    var bst = new BinarySearchTree();
    bst.insert(5);
    bst.insert(1);

    assert.equal(bst.root.value, 5);
    assert.equal(bst.root.left.value, 1);
  });

  it('it sorts values bigger than root to the left', function () {
    var bst = new BinarySearchTree();
    bst.insert(5);
    bst.insert(7);

    assert.equal(bst.root.value, 5);
    assert.equal(bst.root.right.value, 7);
  });

  it('it adds several values to the left', function () {
    var bst = new BinarySearchTree();
    bst.insert(7);
    bst.insert(6);
    bst.insert(5);

    assert.equal(bst.root.value, 7);
    assert.equal(bst.root.left.value, 6);
    assert.equal(bst.root.left.left.value, 5);
  });

  it('can tell if a tree includes a value for the node', function () {
    var bst = new BinarySearchTree();
    bst.insert(7);

    assert.equal(bst.includes(7), true);
  });

  it('can tell if a tree includes a value besides the node', function () {
    var bst = new BinarySearchTree();
    bst.insert(7);
    bst.insert(6);

    assert.equal(bst.includes(6), true);
  });

});

describe('The nodes', function() {
  
  it('exists', function () {
    assert(new Node());
  });

  it('should have a value', function () {
    var n = new Node(3);
    assert.equal(n.value, 3);
  });

  it('Starts with an unknown parent', function () {
    var bst = new Node();
    assert.equal(bst.parent, undefined); 
  });



});