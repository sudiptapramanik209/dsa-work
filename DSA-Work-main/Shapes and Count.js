function countShapes(N,arr){
    // write code here
    let Square=0;
    let Circle=0;
    let Triangle=0;
    let Unknown=0;
    for(let i=0;i<N;i++){
        if(arr[i]=="Square"){
            Square++;
        }else if(arr[i]=="Circle"){
            Circle++;
        }else if(arr[i]=="Triangle"){
            Triangle++;
        }else{
            Unknown++;
        }
    }
    console.log("Square"+" "+Square+" "+"Circle"+" "+Circle+" "+"Triangle"+" "+Triangle+" "+"Unknown"+" "+Unknown)
}
