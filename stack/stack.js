class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
        return undefined;
    }

    const deleted = this.top;
    this.top = this.top.next;
    this.length--;

    if (!this.top) {
      this.bottom = null;
    }

    return deleted;
  }
}

const myStack = new MyStack();
console.log(myStack.push(1));
console.log(myStack.push(2));
console.log(myStack.push(3));
console.log(myStack.peek(3));
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);