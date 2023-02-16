const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var checkWavePattern = function(head) {
  if (!head || !head.next) {
    return true;
  }
  let current = head;
  let increasing = current.data < current.next.data;
  while (current.next) {
    if (increasing && current.data > current.next.data) {
        
      return false;
    } else if (!increasing && current.data < current.next.data) {
        
      return false;
    }
    increasing = !increasing;
    current = current.next;
  }
  return true;
};



