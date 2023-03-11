function threeMaxThreeMin(N,arr){
    //write code here
    let bag=[];
    let obj={};
    for(let i=0;i<N;i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]]=1;
        }else{
            obj[arr[i]]++;
        }
    }
    for(let i in obj){
        bag.push(+i)
    }
    bag.sort(function(a,b){return a-b})
    let x=bag.length;
    if(x>3){
        console.log(bag[0],bag[1],bag[2]);
        console.log(bag[x-3],bag[x-2],bag[x-1]);
    }else{
        console.log("Not Possible");
        console.log("Not Possible");
    }
    
}
