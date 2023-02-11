

function sumENot(arr, newArr, curr,sumArr) {
    // console.log(arr,newArr,curr);

    if (newArr.length > 0) {
        // console.log(newArr);
        var sum = 0;
        for (var j = 0; j < newArr.length; j++) {
            sum += newArr[j];
        }
        // console.log(sum);
        sumArr.push(sum);

    }
    if (curr > arr.length) {
        return;
    }
    for (var i = curr; i < arr.length; i++) {
        newArr.push(arr[i]);
        sumENot(arr, newArr, i + 1,sumArr);
        newArr.pop();
    }
}




function runProgram(input) {
    var input = input.trim().split("\n");
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var K = +input[2];
    var newArr = [];
    var curr = 0;
    var sumArr = [];
    var count = 0;
    sumENot(arr, newArr, curr,sumArr);
    // console.log(sumArr);
    for (var i = 0; i < sumArr.length; i++) {
        if (sumArr[i] == K) {
            count++;
        }
    }
    if (count > 0) {
        console.log("yes")
    } else {
        console.log("no");
    }



}
if (process.env.USERNAME === "siddhesh") {
    runProgram(`9
1 2 3 4 5 6 7 8 9
5`);
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