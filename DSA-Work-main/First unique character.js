function firstunic(str){
    let fr={}
    for(let i=0;i<str.length;i++){
        let char=str[i];
        fr[char]=(fr[char]||0)+1;
    }
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(fr[char]==1){
            return char;
        }
    }
    return "Not Found";
}

function runProgram(input){
    //Input Taking Here
    console.log(firstunic(input));
    
    
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