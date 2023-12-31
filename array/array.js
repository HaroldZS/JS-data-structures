class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  unshift(item) {
    if (item) {
      for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = item;
      this.length++;
    }

    return this.length;
  }

  shift() {
    const firstItem = this.data[0];

    if (firstItem) {
      for (let i = 1; i < this.length; i++) {
        this.data[i - 1] = this.data[i];
      }
      delete this.data[this.length - 1];
      this.length--;
    }

    return firstItem;
  }
}

const myArray = new MyArray();
myArray.push("Harold");
myArray.push("Kevin");
myArray.push("Gianfranco");
myArray.push("Sara");
console.log(myArray.data);
console.log(myArray.get(0));
console.log(myArray.get(1));
console.log(myArray.get(2));
console.log(myArray.get(3));
const deletedItem = myArray.pop();
console.log("Deleted " + deletedItem);
myArray.delete(1);
console.log(myArray.data);
myArray.unshift("first");
console.log(myArray.data);
myArray.shift();
console.log(myArray.data);