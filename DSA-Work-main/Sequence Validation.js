function sequence(arr,arr1){
    let point1=0;
    let point2=0;
    let stack=[];
    while(point1<arr.length){
        stack.push(arr[point1]);
        point1++;
        
        while(stack.length>0&&stack[stack.length-1]==arr1[point2]){
            stack.pop();
            point2++;
        }
    }
    return stack.length===0;
}

function runProgram(input){
    //Input Taking Here
    input=input.trim().split("\n");
    let length=Number(input[0]);
    let line=1;
    for(let i=0;i<length;i++){
        let le=Number(input[line++]);
        let arr=input[line++].trim().split(" ").map(Number);
        let arr1=input[line++].trim().split(" ").map(Number);
        //console.log(le,arr,arr1);
        if(sequence(arr,arr1)){
            console.log(1);
        }else{
            console.log(0);
        }
    }
    //console.log(input);
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