const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

var deleteDuplicates = function(head) {
    if (!head) {
        return null;
    }
    const seen = new Set();
    let prevNode = null;
    let currNode = head;
    while (currNode) {
        if (seen.has(currNode.data)) {
            prevNode.next = currNode.next;
        } else {
            seen.add(currNode.data);
            prevNode = currNode;
        }
        currNode = currNode.next;
    }
    return head;
};


