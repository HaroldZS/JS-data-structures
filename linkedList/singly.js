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

    if (index === this.length) {
      return this.append(value);
    }

    if (index > this.length || index < 0) {
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

  delete(index) {
    if (index >= this.length || index < 0) {
      return undefined;
    }

    let deleted;

    if (index === 0) {
      deleted = this.head;
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      const prev = this.getNodeByIndex(index - 1);
      deleted = prev.next;
      prev.next = deleted.next;
      if (index === this.length - 1) {
        this.tail = prev;
      }
    }

    this.length--;
    return deleted;
  }
}

let myLinkedList = new MySinglyLinkedList(1);
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.prepend(0));
console.log(myLinkedList.insert(2, 5));
console.log(myLinkedList.getNodeByIndex(2));
console.log(myLinkedList.delete(4));
console.log(myLinkedList.getNodeByIndex(3));
console.log(myLinkedList);
console.log(myLinkedList.append(9));
console.log(myLinkedList.getNodeByIndex(4));
console.log(myLinkedList.insert(4, 8));
console.log(myLinkedList.getNodeByIndex(4));
console.log(myLinkedList.getNodeByIndex(5));
console.log(myLinkedList.insert(6, 13));
console.log(myLinkedList.getNodeByIndex(6));
console.log(myLinkedList.insert(6, 12));
console.log(myLinkedList.delete(0));
console.log(myLinkedList.getNodeByIndex(0));
console.log(myLinkedList);
console.log(myLinkedList.delete(6));
console.log(myLinkedList.getNodeByIndex(5));
console.log(myLinkedList);