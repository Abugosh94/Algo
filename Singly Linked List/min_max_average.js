class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}


class SLL{
    constructor(){
        this.head = null;
    }
    addFront(val) {
        // Creating a new node object with the value provided
        let new_node = new Node(val);
        // If the list is empty, place the new node as the head 
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    removeFront() {
        // If the list is not empty
        if(this.head) {
            let temp = this.head.next
            this.head = temp;
            return this;
        }
        // If the list is empty, return list
        return this;
    }
    front(){
        return this.head.data
    }
    contains(value){
        let node = this.head;
        while(node !== null){
            if (node.data == value){
                return true
            }
            node = node.next;
        }
        return false;
    }
    length(){
        let counter = 0;
        let node = this.head;
        while(node !== null){
            counter ++;
            node = node.next;
        }
        return counter;
    }
    display(){
        let list = "";
        let node = this.head;
        while(node !== null){
            if (list == ""){
                list += String(node.data);
            }
            else{
                list += ", " + String(node.data);
            }
            node = node.next;
        }
        return list;
    }
    max(){
        let node = this.head;
        let max = node.data;
        while (node !== null){
            if(node.data > max){
                max = node.data;
            }
            node = node.next;
        }
        return max;
    }
    min(){
        let node = this.head;
        let min = node.data;
        while (node !== null){
            if(node.data < min){
                min = node.data;
            }
            node = node.next;
        }
        return min;
    }
    average(){
        let len = 0;
        let sum = 0;
        let node = this.head;
        while (node !== null){
            sum += node.data;
            len++;
            node = node.next;
        }
        return sum/len;
    }
}


SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);
console.log(SLL1);
console.log(SLL1.front());
SLL1.removeFront();
console.log(SLL1.front());
SLL1.removeFront();
console.log(SLL1.front());
console.log(SLL1.contains(18));
console.log(SLL1.contains(5));
console.log(SLL1.length());
SLL1.addFront(420);
console.log(SLL1.length());
console.log(SLL1.display());
console.log(SLL1.max());
console.log(SLL1.min());
console.log(SLL1.average());

