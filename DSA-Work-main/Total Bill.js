function totalBill(N) {
    // Write code here
    console.log(totalBill1(N));
function totalBill1(units) {
  let bill = 80;
  if (units <= 50) {
    bill += units * 3;
  } else if (units <= 150) {
    bill += 50 * 3 + (units - 50) * 5;
  } else {
    bill += 50 * 3 + 100 * 5 + (units - 150) * 10;
  }
  return bill;
}
}
