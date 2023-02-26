function runProgram(input){
    //Input Taking Here
    let registername={};
    
    input=input.trim().split("\n");
    let length=Number(input[0]);
    let line=1;
    for(let i=0;i<length;i++){
        let str=input[line++];
        //console.log(str);
        console.log(registeruser(str));
    }
    
    function registeruser(name){
        let counter=1;
        if(!registername[name]){
            registername[name]=true;
            return "OK";
        }else{
            let newuser=name+counter;
            counter++;
            registername[newuser]=true;
            return newuser;
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