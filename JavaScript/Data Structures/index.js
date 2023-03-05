// const LinkedList = require("./Linked_List_Stack");

// class LinkedListStack {
//     constructor() {
//         this.list = new LinkedList();
//     }

//     push(value) {
//         this.list.prepend(value);
//     }

//     pop() {
//         return this.list.removeFromFront();
//     }

//     peek() {
//         return this.list.head.value;
//     }

//     isEmpty() {
//         return this.list.isEmpty();
//     }

//     getSize() {
//         return this.list.getSize();
//     }

//     print() {
//         return this.list.print();
//     }
// };

// const stack = new LinkedListStack();
// console.log(stack.isEmpty());

// stack.push(20);
// stack.push(10);
// stack.push(30);
// console.log(stack.getSize());
// stack.print();

// console.log(stack.pop());
// console.log(stack.peek());
// stack.print();

const LinkedList = require("./Linked_List_Stack");

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        return this.list.removeFromFront();
    }

    peek() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        return this.list.print();
    }
};

const queue = new LinkedListQueue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.getSize());
queue.print();

console.log(queue.dequeue());
queue.print();

console.log(queue.peek());