var arr=[1,2,3,4,5,6,7,8]
// calculate summation of array elements
var summation=arr.reduce((x,y)=>{return x+y;},0)
console.log(summation)
//// calculate multiplication of array elements
var multiplication=arr.reduce((x,y)=>{return x*y;},1)
console.log(multiplication)