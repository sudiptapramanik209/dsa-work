function repeated(arr){
    const n = arr.length;
  let missingNumber, repeatedNumber;
  for (let i = 0; i < n; i++) {
    const index = Math.abs(arr[i]) - 1;
    if (arr[index] > 0) {
      arr[index] = -arr[index];
    } else {
      repeatedNumber = Math.abs(arr[i]);
    }
  }
  
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      missingNumber = i + 1;
      break;
    }
  }
  console.log(missingNumber,repeatedNumber);
}


function runProgram(input){
    //Input Taking Here
    input=input.trim().split("\n");
    let len=Number(input[0]);
    let line=1;
    for(let i=0;i<len;i++){
        let s=input[line++];
        let arr=input[line++].trim().split(" ").map(Number);
        repeated(arr);
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