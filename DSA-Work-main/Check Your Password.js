function checkpass(password){
    let numEnglishChars = 0;
    
    for (let i = 0; i < password.length; i++) {
      if (password[i].match(/[a-z]/)) {
        numEnglishChars++;
      }
    }
    
    if (numEnglishChars > password.length / 2) {
      console.log("Strong");
    } else {
      console.log("Weak");
    }
  }
  
  
  function runProgram(input){
      //Input Taking Here
      input=input.trim().split("\n");
      let le=Number(input[0]);
      let line=1;
      for(let i=0;i<le;i++){
          let s=input[line++];
          let arr=input[line++].trim().split("");
          checkpass(arr);
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