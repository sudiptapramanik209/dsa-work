function Bulb(n,arr){
    let q=[];
    for(let i=0;i<n;i++){
        q.push(true);
    }
    for(let i=0;i<n;i++){
        q[arr[i]-1]=!q[arr[i]-1];
        let left=0,right=n-1;
        while(q[left]===false){
            left++
        }
        while(q[right]===false){
            right--
        }
        console.log(left+1,right+1)
    }
}

function runProgram(input){
    //Input Taking Here
    input=input.trim().split("\n");
    let length=Number(input[0]);
    let arr=input[1].trim().split(" ").map(Number);
    Bulb(length,arr);
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