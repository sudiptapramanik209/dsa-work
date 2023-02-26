function warOfminions(n, minions){
    let stack = [];
  
  for (let i = 0; i < n; i++) {
    let curr = minions[i];
    if (stack.length && stack[stack.length - 1] === curr) {
      stack.pop();
    } else {
      stack.push(curr);
    }
  }
  
  if (stack.length === 0) return "-1";
  return stack.join("");
}

function runProgram(input){
    //Input Taking Here
    input=input.trim().split("\n");
    let le=Number(input[0]);
    let arr=input[1];
    //console.log(le,arr);
    console.log(warOfminions(le,arr));
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