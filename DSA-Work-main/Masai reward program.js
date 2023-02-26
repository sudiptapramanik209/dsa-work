function reward(n,m,arr1,arr2){
    let start=0;
    let max=-Infinity;
    let ans=0;
    for(let i=0;i<m;i++){
        let unit=arr2[i]-start;
        start=arr2[i];
        if(unit>max){
            max=unit;
            ans=arr1[i];
        }else if(unit===max){
            if(ans>arr1[i]){
                ans=arr1[i];
            }
        }
    }
    console.log(ans);
}


function runProgram(input){
    //Input Taking Here
    input=input.trim().split("\n");
    let t=+input[0];
    let line=1;
    for(let i=0;i<t;i++){
        let [n,m]=input[line++].split(" ").map(Number);
        let arr1=[];
        let arr2=[];
        for(let j=0;j<m;j++){
            let [a,b]=input[line++].split(" ").map(Number);
            arr1.push(a);
            arr2.push(b);
        }
        reward(n,m,arr1,arr2);
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