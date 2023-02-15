const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head, n) {
    let f_Pointer = head;
    let s_Pointer = head;
    
    for (let i = 0; i < n; i++) {
        if (s_Pointer === null) {
            return null;
        }
        s_Pointer = s_Pointer.next;
    }
    
    while (s_Pointer !== null) {
        f_Pointer = f_Pointer.next;
        s_Pointer = s_Pointer.next;
    }
    
    return f_Pointer.data;
}
