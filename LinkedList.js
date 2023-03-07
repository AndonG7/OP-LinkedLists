import { Node } from "./Node.js";

export class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    //Add first node
    prepend(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }

    
}