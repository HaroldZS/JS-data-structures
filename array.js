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