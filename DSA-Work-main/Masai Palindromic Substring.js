function masaiPalSubString(S){
    //write code here
    let len=0;
    for(let i=0;i<=S.length;i++){
        let bag="";
        for(let j=i;j<S.length;j++){
            bag+=S[j];
        let resubstr="";
        for(k=bag.length-1;k>=0;k--){
            resubstr+=bag[k];
        }
        if(bag==resubstr){
            if(bag.length>len){
                len=bag.length;
            }
        }
    }
        
    }
    console.log(len);
}
