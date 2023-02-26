function validStack(str1,str2){
    let stack=[]
    let i=0;
    for(let el of str1){
        stack.push(el);
        while(stack.length&&stack[stack.length-1]===str2[i]){
            stack.pop()
            i++;
        }
    }
    return str1.length==i
}




function runProgram(input){
    //Input Taking Here
    input=input.trim().split("\n");
    let length=+Number(input[0]);
    let line=1;
    for(let i=0;i<length;i++){
        let le=input[line++];
        let str1=input[line++];
        let str2=input[line++];
        if(validStack(str1,str2)){
            console.log("YES");
        }else{
            console.log("NO");
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