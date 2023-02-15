
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
  let dummy = new LinkedListNode(0);
  dummy.next = head;
  let current = head;
  let lastNonNine = dummy;
  while (current !== null) {
    if (current.data !== 9) {
      lastNonNine = current;
    }
    current = current.next;
  }
  lastNonNine.data += 1;
  current = lastNonNine.next;
  while (current !== null) {
    current.data = 0;
    current = current.next;
  }
  if (dummy.data !== 0) {
    return dummy;
  }
  
  return head;
};


