function maximumOccuringElement(A,N){
    //write code here
    let maxCount=0;
    let maxNum=null;
    for(const num of A){
        const count=A.filter(N =>N===num).length;
        if(count>maxCount||(count===maxCount&num<maxNum)){
            maxCount=count;
            maxNum=num;
        }
    }
    console.log(maxNum);
    
}
