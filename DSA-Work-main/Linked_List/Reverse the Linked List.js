
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    let current=head;
    let future=null;
    let past=null;
    while(current!==null){
        future=current.next;
        current.next=past;
        past=current;
        current=future;
    }
    head=past;
    return head;
}

