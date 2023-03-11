function Square(n){
let string = "";

for(let i = 0; i < n; i++) { 
  for(let j = 0; j < n; j++) {
    if(i === 0 || i === n - 1) {
      string += "*"+" ";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*"+" ";
      }
      else {
        string += "  ";
      }
    }
  }
  string += "\n";
}
console.log(string);
}



function runProgram(input){
    //Input Taking Here
    Square(input);
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
