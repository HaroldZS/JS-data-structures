class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class MyBinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node();
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            currentNode.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
}

const myBinarySearchTree = new MyBinarySearchTree();
console.log(myBinarySearchTree.insert(10));
console.log(myBinarySearchTree.insert(4));
console.log(myBinarySearchTree.insert(20));
console.log(myBinarySearchTree.insert(2));
console.log(myBinarySearchTree.insert(8));
console.log(myBinarySearchTree.insert(17));
console.log(myBinarySearchTree.insert(170));
