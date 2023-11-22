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
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
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

  insertRecursively(value, node = this.root) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }

    if (value < node.value) {
      if (!node.left) {
        node.left = new Node(value);
        return this;
      } else {
        return this.insertRecursively(value, node.left);
      }
    } else {
      if (!node.right) {
        node.right = new Node(value);
        return this;
      } else {
        return this.insertRecursively(value, node.right);
      }
    }
  }

  search(value) {
    if (!this.root) {
      return undefined;
    } else {
      let current = this.root;
      while (true) {
        if (current.value === value) {
          return current;
        } else {
          if (value < current.value) {
            if (!current.left) {
              return undefined;
            }
            current = current.left;
          } else {
            if (!current.right) {
              return undefined;
            }
            current = current.right;
          }
        }
      }
    }
  }
}

const myBinarySearchTree = new MyBinarySearchTree();
// console.log(myBinarySearchTree.insert(10));
// console.log(myBinarySearchTree.insert(4));
// console.log(myBinarySearchTree.insert(20));
// console.log(myBinarySearchTree.insert(2));
// console.log(myBinarySearchTree.insert(8));
// console.log(myBinarySearchTree.insert(17));
// console.log(myBinarySearchTree.insert(170));
console.log(myBinarySearchTree.insertRecursively(10));
console.log(myBinarySearchTree.insertRecursively(4));
console.log(myBinarySearchTree.insertRecursively(20));
console.log(myBinarySearchTree.insertRecursively(2));
console.log(myBinarySearchTree.insertRecursively(8));
console.log(myBinarySearchTree.insertRecursively(17));
console.log(myBinarySearchTree.insertRecursively(170));
console.log(myBinarySearchTree.search(4));
