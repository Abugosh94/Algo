class BTNode {
    constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
    }
}
class BST {
    constructor() {
    this.root = null;
};
//Create a contains(val) method on BST that returns whether the tree contains a given value. 
//Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.
contains(val) {
    return this.search(this.root, val);
}
search(node, val) {
    if (!node) {
        return false;
    }

    if (node.val === val) {
        return true;
    } else if (val < node.val) {
        return this.search(node.left, val);
    } else {
        return this.search(node.right, val);
    };
};
//Write a size() method that returns the number of nodes (values) contained in the tree.
size() {
    return this.countNodes(this.root);
};

countNodes(node) {
    if (!node) {
        return 0;
    }

    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
};
min(){
    var node = this.root;
    while(node.left){
        node = node.left;
    };
    return node.val
};
max(){
    var node = this.root;
    while(node.right){
        node = node.right;
    };
    return node.val
};
//Create an isEmpty() method to return whether the BST is empty (whether it contains no values).
isEmpty(){
    if(this.root == null){
        return true
    }
    else{
        return false
    };
};
// Create an add(val) method on the BST object to add new value to the tree. 
//This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.
    add(val){
        var newNode = new BTNode(val);
        if(this.root == null){
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode)
        };
    };
    insertNode(node, newNode) {
        if (newNode.val < node.val) {
            if (!node.left) {
                node.left = newNode;
            } 
            else {
                this.insertNode(node.left, newNode);
            };
        }
        else if (newNode.val > node.val) {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            };
        }
        else {
            // handle duplicate values (insert them on the right).
            if (!node.right) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            };
        };
    };
};

bst = new BST;
bst.add(5);
bst.add(2);
bst.add(1);
console.log(bst)
console.log(bst.root.left)
console.log(bst.min())
console.log(bst.max())
console.log(bst.contains(5))
console.log(bst.contains(10))
console.log(bst.size())