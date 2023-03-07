import { LinkedList } from "./LinkedList.js";

//Create LinkedList object
const ll1 = new LinkedList();

ll1.prepend(10);
ll1.prepend(20);
ll1.append(40);
ll1.append(50);
ll1.pop();

// console.log(ll1.getSize());
// console.log(ll1.getHead());
// console.log(ll1.getTail());
// console.log(ll1.atIndex(0));
// console.log(ll1.contains(50));
// console.log(ll1.find(40));
console.log(ll1.toString());
console.log(ll1);