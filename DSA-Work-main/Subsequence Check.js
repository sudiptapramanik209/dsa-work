function Subsequence(a,b){
    let i=0;
    let j=0;
    while(i<a.length&& j<b.length){
        if(a[i]===b[j]){
            i++;
        }
        j++;
    }
    return i===a.length;
}


function runProgram(input){
    //Input Taking Here
    input=input.trim().split("\n");
    let [N,S]=input[0].trim().split(" ").map(Number);
    let arr=input[1];
    let arr1=input[2];
    if(Subsequence(arr,arr1)){
        console.log("YES");
    }else{
        console.log("NO");
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