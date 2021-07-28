// Code your solutions in this file
function writeCards(arrName, eventName) {
  let newArr = [];
  for (let i = 0; i < arrName.length; i++) {
    newArr.push(`Thank you, ${arrName[i]}, for the wonderful ${eventName} gift!`)
  }
  return newArr
}

function countDown(x) {
  while (x > 0) {
    console.log(x--);
  }
  console.log(x);
}

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts;
// }