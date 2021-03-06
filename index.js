const LinkedList = require('./LinkedList');

const myList = new LinkedList();

myList.insert(42);
myList.insert(13);
myList.insert(7);

let currentNode = myList.head;
for (let i = 0; i < myList.length; i++) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}

// console.log(JSON.stringify(myList, null, 2));
