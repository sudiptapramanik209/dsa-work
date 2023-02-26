function minSteps(n) {
    if (n === 1) {
      return 0;
    }
  
    let steps = 0;
    while(n>1){
    while (n % 2 === 0) {
      n /= 2;
      steps++;
    }
  
    while (n % 3 === 0) {
      n /= 3;
      steps += 2;
    }
  
    while (n % 5 === 0) {
      n /= 5;
      steps += 4;
    }
  
    return n === 1 ? steps : -1;
  }
      
  }
  
  function runProgram(input){
      //Input Taking Here
      input=input.trim().split("\n");
      let le=Number(input[0]);
      let line=1;
      for(let i=0;i<le;i++){
          let s=Number(input[line++]);
          //console.log(s);
          console.log(minSteps(s));
          //console.log(countways(s));
          
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