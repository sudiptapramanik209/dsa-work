let count = 0;

function masaiways(arr, N, K) {
    
    if (K < 0) {
        return 0;
    }
    if(K == 0){
        count++;
        return;
    }
    

 

    for(var i = 0; i < N; i++){
        masaiways(arr, N, K - arr[i]);
    }
}



function runProgram(input) {
    var input = input.trim().split("\n");
    var arr1 = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
   
    var K = +arr1[0];
    var N = +arr1[1];
    
    masaiways(arr, N, K);
    console.log(count)
   


}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`26 4
9 6 7 10`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}