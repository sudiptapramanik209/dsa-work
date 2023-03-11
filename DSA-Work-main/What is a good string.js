function runProgram(input){
    //Input Taking Here
    input=input.split("\n")
    let N=input[0];
    let S=input[1].split("");
    let mat=[];
    for(let i=0;i<N;i++){
        if(mat.length%2==1){
            if(mat[mat.length-1]!=S[i]){
                mat.push(S[i]);
            }
        }else{
            mat.push(S[i]);
        }
    }
    if(mat.length%2!=0){
        mat.pop()
    }
    let dif=S.length-mat.length;
    console.log(dif+"\n"+mat.join(""));
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