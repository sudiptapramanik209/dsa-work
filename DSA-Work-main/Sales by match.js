function salebymatch(l,str){
    let match=0;
    for(let i=0;i<l;i++){
        if(str[i]!=0){
            for(let j=i+1;j<l;j++){
                if(str[i]==str[j]){
                    match++;
                    str[j]=0;
                    break;
                }
            }
        }
    }
    console.log(match);
}




function runProgram(input){
    //Input Taking Here
    input=input.trim().split("\n");
    let length=+Number(input[0]);
    let str=input[1].split(' ');
    //console.log(str);
    salebymatch(length,str);
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