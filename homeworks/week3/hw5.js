function add(a, b) {
  let arrA = a.split('');
  let arrB = b.split('');
  let carryBit = 0;
  let reverseResult = '';
  if (arrA.length > arrB.length) {
    arrB = ('0'.repeat(arrA.length - arrB.length) + b).split('');
  } else {
    arrA = ('0'.repeat(arrB.length - arrA.length) + a).split('');
  }
  for (let i = arrA.length - 1; i >= 0; i -= 1) {
    const addThreeDigit = Number(arrB[i]) + Number(arrA[i]) + carryBit;
    if (addThreeDigit > 9) {
      carryBit = 1;
      reverseResult += addThreeDigit % 10;
    } else {
      carryBit = 0;
      reverseResult += addThreeDigit;
    }
  }
  return reverseResult
    .split('')
    .reverse()
    .join('');
}

module.exports = add;
