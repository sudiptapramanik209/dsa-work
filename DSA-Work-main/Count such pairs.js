function count(N,K,A){
    let count=0;
    //console.log(A.length);
    for(let i=0;i<A.length;i++){
        for(let j=i+1;j<A.length;j++){
            if(A[i]+A[j]==K){
                count++;
            }
        }
    }
    console.log(count);
}




function runProgram(input){
    //Input Taking Here
    input=input.trim().split("\n")
    let [n,k]=input[0].trim().split(" ").map(Number);
    let arr=input[1].trim().split(" ").map(Number);
    count(n,k,arr);
    //console.log(arr);
}
if(process.env.USER===""){
    runProgram('');
}else{
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read="";
    process.stdin.on("data",function(input){
        read+=input;
    });
    process.stdin.on("end",function(){
        read=read.replace(/\n$/,"");
        read=read.replace(/\n$/,'');
        runProgram(read);
    });
    process.on('SIGINT',function(){
        read=read.replace(/\n$/,"");
        runProgram(read);
        process.exit(0);
    });
}