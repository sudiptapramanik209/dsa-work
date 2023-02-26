function duplicates(s){
    //console.log(s)
    while(true){
        let foundpare=false;
        for(let i=0;i<s.length;i++){
            if(s[i]===s[i+1]){
                s=s.substring(0,i)+s.substring(i+2)
                foundpare=true;
            }
        }
        if(!foundpare){
            break;
        }
        
    }if(s.length===0){
            return "Empty String"
        }
        return s;
}


function runProgram(input){
    //Input Taking Here
    //input=input.trim().split(" ")
    //console.log(input);
    console.log(duplicates(input));
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