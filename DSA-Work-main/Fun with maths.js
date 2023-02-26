const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var funMaths = function (head) {
    let primehead=null;
    let primetail=null;
    let nonprimehead=null;
    let nonprimetail=null;
    let current =head;
    while(current){
        if(prime(current.data)){
            if(!primehead){
            primehead=primetail=current;
        }else{
            primetail.next=current;
            primetail=current;
        }
    }else{
        if(!nonprimehead){
            nonprimehead=nonprimetail=current;
            
        }else{
            nonprimetail.next=current;
            nonprimetail=current;
        }
    }
    current=current.next;
}
if(primetail){
    primetail.next=nonprimehead;
    return primehead;
}else{
    return nonprimehead;
}
    
};

function prime(num){
    if(num<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}


