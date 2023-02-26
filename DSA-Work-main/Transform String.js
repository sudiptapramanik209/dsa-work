function transform(str){
    let bag="";
    for(let i=0;i<str.length;i++){
        let count=1
        while(i+1<str.length&&str.charAt(i)==str.charAt(i+1)){
            i++;
            count++;
        }
        bag+=(str.charAt(i)+""+count);
    }
    console.log(bag);
}


function runProgram(input){
    //Input Taking Here
    input=input.trim().split("\n");
    let le=input[0];
    let str=input[1];
    transform(str);
    //console.log(le,str);
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