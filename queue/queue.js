class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    const deleted = this.first;

    if (deleted) {
      this.first = this.first.next;
      this.length--;
      if (this.length === 0) {
        this.last = null;
      }
    }

    return deleted;
  }
}

const myQueue = new MyQueue();
console.log(myQueue.enqueue(1));
console.log(myQueue.enqueue(2));
console.log(myQueue.enqueue(3));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);