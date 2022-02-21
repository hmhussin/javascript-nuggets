let example1 = [1, 2, 3, 4, 5]
let example2 = [...example1]
let example3 = example1;
let example4 = example1;
example2.push(6)
example3.push(7);
example4.push(8);
//note that spread operator not referenced array it create new array
console.log(example1)
console.log(example2)
console.log(example3)
console.log(example4)
let obj1 = { name: 'ali' }
let obj2 = { ...obj1 }
console.log(obj2)
console.log(Math.max(...example2))
let example5 = { ...example1 }
console.log(example5)
