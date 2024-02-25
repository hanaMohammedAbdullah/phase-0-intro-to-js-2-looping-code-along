// Code your solutions in this file
function writeCards(arr, event) {
  const arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(`Thanks you, ${arr[i]} for the woinderfull ${event} gift!`);
    arr2.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    debugger;
  }

  return arr2;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num--);
  }
}
