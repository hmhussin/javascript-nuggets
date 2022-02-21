//math
//standard built-in object always available
const number = 4.684883
const result1 = Math.floor(number)
console.log(result1)
const result2 = Math.ceil(number)
console.log(result2)
const result3 = Math.PI
console.log(result3)
const arr = [1, 2, 3, 4, 5, 6, 9, 23, 44]
//using spread operator to convert array to numbers
console.log(...arr)
const result4 = Math.min(...arr)
console.log(result4)
const result5 = Math.max(...arr)
console.log(result5)
//square root
const result6 = Math.sqrt(16)
console.log(result6)
//random value from 0 to .99999999999
const result7 =Math.floor( Math.random()*10);
console.log(result7)
