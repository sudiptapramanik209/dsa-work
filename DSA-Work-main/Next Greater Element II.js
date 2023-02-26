function nextgreater(arr){
    let result=[];
    let n=arr.length;
    for(let i=0;i<n;i++){
        let next=-1;
        for(let j=i+1;j<n+i;j++){
            if(arr[j%n]>arr[i]){
                next=arr[j%n];
                break;
            }
        }
        result.push(next);
    }
    return result.join(" ");
}


function runProgram(input){
    //Input Taking Here
    input=input.trim().split("\n");
    let length=Number(input[0]);
    let line=1;
    for(let i=0;i<length;i++){
        let le=Number(input[line++]);
        let arr=input[line++].trim().split(" ").map(Number);
        //console.log(le,arr);
        console.log(nextgreater(arr));
        
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