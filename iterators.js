const myIterator = {
    num: 0,
    total: 10,

    next() {
        if (this.total > this.num) {
            return { value: this.num++, done: false };
        } else {
            return {
                value: undefined,
                done: true
            };
        }
    }
};

console.log(myIterator.next()); // { value: 0, done: false }
console.log(myIterator.next()); // { value: 1, done: false }
console.log(myIterator.next()); // { value: 2, done: false }
console.log(myIterator.next()); // { value: 3, done: false }
console.log(myIterator.next()); // { value: 4, done: false }
