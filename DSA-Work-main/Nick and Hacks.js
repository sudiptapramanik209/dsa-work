function NickHack(N,amount){
    //console.log(N)
    if(amount==N){
        return true;
    }
    if(amount>N){
        return false;
    }
    
    return NickHack(N,amount*10)|| NickHack(N,amount*20)
}

function runProgram(input){
    //Input Taking Here
    input=input.trim().split("\n");
    var testCase=+input[0];
    var line=1;
    for(let i=0;i<testCase;i++){
        var N=+input[line].trim();
        line++;
        var amount=1;
        NickHack(N,amount)
        if(NickHack(N,amount)){
            console.log("Yes");
        }else{
            console.log("No");
        }
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