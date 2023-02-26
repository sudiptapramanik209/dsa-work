function greaterAgainProduct(arr){
    const n=arr.length;
    const stack=[];
    const result=[];
   
    for(let i=0;i<n;i++){
        result.push(-1);
    }
   
    for(let i=0;i<2*n;i++){
        const index=i%n;
        const element=arr[index];
       
        while(stack.length>0 && element>arr[stack[stack.length-1]]){
            const topIndex=stack.pop();
            result[topIndex]=element;
        }
        stack.push(index);
    }
   
    let product=1;
    for(let i=0;i<n;i++){
        if(stack[i]===-1){
            stack[i]= -1;
        }else{
            product*=result[i];
            // console.log(stack[i]);
        }
    }
    return product;
}

function runProgram(input){
    //Input Taking Here
    input=input.trim().split("\n");
    let length=Number(input[0]);
    let line=1;
    for(let i=0;i<length;i++){
        let n=Number(input[line++]);
        let arr=input[line++].trim().split(" ").map(Number);
        console.log(greaterAgainProduct(arr));
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