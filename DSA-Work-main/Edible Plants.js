function ediblePlants(N,edible,M,plants){
    // write code here
  let count = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (plants[i] === edible[j]) {
        count++;
        break;
      }
    }
  }
  console.log(count);
}
