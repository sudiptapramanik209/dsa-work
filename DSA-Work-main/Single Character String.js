function minChanges(s) {
    let aCount = 0;
    let bCount = 0;
    for (const c of s) {
      if (c === 'a') {
        aCount++;
      } else {
        bCount++;
      }
    }
    return Math.min(aCount, bCount);
  }
  function runProgram(input){
      //Input Taking Here
      input=input.trim().split("\n");
      let le=input[0];
      let str=input[1];
      console.log(minChanges(str));
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