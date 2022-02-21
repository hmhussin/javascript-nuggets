
//find
//returns single instance (in this case return an object)
//return the 1st match,if no match return undefined
//great for getting unique value
const people = [
{name:'bob',age:20,position:'developer', id:1},
{name:'ana',age:25,position:'designer',id:2},
{ name: 'suzy', age: 30, position: 'boss',id:3 },
{name:'anna',age:35,position:'made',id:4}
];
const person = people.find((people) => {
    return people.id === 3;
})
console.log(person.name, person.position)
//filter vs find -filter return all data 
const person2 = people.filter((people) => {
    return people.id === 3;
})
console.log(person2[0].name,person2[0].position)

const fruit = ['orange', 'apple', 'mango', 'banana']
console.log(fruit.find((fruit) => {
    return fruit==='orange'
}))