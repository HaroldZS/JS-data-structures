class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length || index < 0) {
      return undefined;
    }

    const newNode = new Node(value);
    const prev = this.getNodeByIndex(index - 1);

    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return this;
  }

  getNodeByIndex(index) {
    if (index >= this.length || index < 0) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter != index) {
      current = current.next;
      counter++;
    }

    return current;
  }
}

let myLinkedList = new MySinglyLinkedList(1);
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.prepend(0));
console.log(myLinkedList.insert(2, 5));
console.log(myLinkedList.getNodeByIndex(2));