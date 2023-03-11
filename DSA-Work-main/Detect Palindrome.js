function runProgram(input){
    //Input Taking Here
    let len=input.length;
    let flage=true;
    for(let i=0;i<len/2;i++){
        if(input[i]!==input[len-1-i]){
            flage=false;
        }
    }
    if(flage){
        console.log("Yes");
    }else{
        console.log("No");
    }
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