
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(0);
  let tail = dummy;
  let p1 = l1; 
  let p2 = l2; 
  
  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      tail.next = p1; 
      p1 = p1.next; 
    } else {
      tail.next = p2;
      p2 = p2.next; 
    }
    tail = tail.next;
  }
  
  if (p1 !== null) {
    tail.next = p1;
  } else {
    tail.next = p2;
  }
  
  return dummy.next;
};

