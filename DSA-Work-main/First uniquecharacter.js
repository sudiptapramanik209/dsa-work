function finduviq(s){
    let cCount={};
    for(let i=0;i<s.length;i++){
        let char=s[i];
        if(cCount[char]){
            cCount[char]++;
        }else{
            cCount[char]=1;
        }
    }
    for(let i=0;i<s.length;i++){
        let char=s[i];
        if(cCount[char]===1){
            return char;
        }
    }
    return "Not Found";
}

function runProgram(input){
    //Input Taking Here
    console.log(finduviq(input));
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