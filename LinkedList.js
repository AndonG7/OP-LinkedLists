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

    //Add last node
    append(value) {
        let node = new Node(value);
        let temp;

        //If list is empty, the new node is the head node
        if(this.head === null) {
            this.head = node;
        } 
        //Otherwise make the temporary variable be the head value
         else {
            temp = this.head;
            
            //Then cycle through all the remaining nodes until the last one
            while (temp.next) {
                temp = temp.next;
            }

            //The last node is given to the temp variable and 
            //append the new node next to the last node 
            temp.next = node;

            //Increment the size value
            this.size++;
        }

    }

    //Get the size of the linked list
    getSize() {
        return this.size;
    }

    //Get the head node of the linked list
    getHead() {
        return this.head;
    }

    //Get the last  node of the linked list
    //Same principle applies as the add Last Node without the adding part
    getTail() {
        let temp;

        if(this.head === null) {
            return null;
        } 
         else {
            temp = this.head;
            
            while (temp.next) {
                temp = temp.next;
            }
            return temp;
        }
    }

    //Get element at index
    atIndex(index) {
        let temp = this.head;

        if (index === 0) {
            return temp;
        } else {
            for (let i=0; i<index; i++){
                temp = temp.next;
            }
        }
        return temp;
    }

    //Remove last node from the list
    //Same principle applies as the getLast function
    pop() {
        let temp;

        if(this.head === null) {
            return null;
        } 
         else {
            temp = this.head;
            
            //Get the before the last element
            for (let i=0; i<this.size-2; i++){
                temp = temp.next;
            }
            //Make it's next element null
            temp.next = null;
        }
            //Decrement the size value
            this.size--;

    }

    //Check if a value is contained in the list. If it is return true.
    contains(value) {
        let temp;

        if(this.head === null) {
            return false;
        } 
         else {
            temp = this.head;
            
            for (let i=0; i<this.size; i++) {
                console.log(temp.data);
                if (temp.data === value) {
                    return true;
                }
                temp = temp.next;
            }

        }

        return false;
    }

    //Get element index if it is contained in the list
    find(value) {
        let temp;

        if(this.head === null) {
            return null;
        } 
         else {
            temp = this.head;
            
            for (let i=0; i<this.size; i++) {
                console.log(temp.data);
                if (temp.data === value) {
                    return i;
                }
                temp = temp.next;
            }

        }

        return null;
    }

    //Print elements as string
    toString() {
        let temp;
        let nodeStr = "";

        if(this.head === null) {
            return false;
        } 
         else {
            temp = this.head;
            
            for (let i=0; i<this.size; i++) {
                nodeStr = nodeStr + "( " + temp.data + " ) " + "-> "; 
                temp = temp.next;
            }

        }

        nodeStr = nodeStr + "null";

        return nodeStr;
    }
}