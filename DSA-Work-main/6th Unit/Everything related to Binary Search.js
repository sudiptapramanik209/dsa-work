function bS(N, arr, K) {
  // console.log(N, arr, K);

  let lowerBound = (N, K, arr) => {
    let low = 0;
    let high = N - 1;
    let ans = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] == K) {
        ans = mid;
        high = mid - 1;
      }

      if (arr[mid] > K) {
        high = mid - 1;
      } else if (arr[mid] < K) {
        low = mid + 1;
      }
    }

    return ans;
  };

  let upperBound = (N, K, arr) => {
    let low = 0;
    let high = N - 1;
    let ans = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] == K) {
        ans = mid;
        low = mid + 1;
      }

      if (arr[mid] > K) {
        high = mid - 1;
      } else if (arr[mid] < K) {
        low = mid + 1;
      }
    }

    return ans;
  };

  if (lowerBound(N, K, arr) == -1 && upperBound(N,  K, arr) == -1) {
    return console.log(lowerBound(N, K, arr), upperBound(N, K, arr), 0);
  }

  return console.log(
    lowerBound(N, K, arr),
    upperBound(N, K, arr),
    upperBound(N, K, arr) - lowerBound(N, K, arr) + 1
  );
}

function runProgram(input) {
  var input = input.trim().split('\n');

  let N = +input[0];
  let arr = input[1].trim().split(' ').map(Number);
  let K = +input[2];

  bS(N, arr, K);
}
if (process.env.USERNAME === 'siddhesh') {
  runProgram(`6
1 1 1 2 2 2	
1`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    read = read.replace(/\n$/, '');
    runProgram(read);
  });
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
