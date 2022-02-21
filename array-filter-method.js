//filter
// does not return a new array
//can manipulate the size of new array
// returns based on conditions
const people = [
{name:'bob',age:20,position:'developer'},
{name:'ana',age:25,position:'designer'},
{ name: 'suzy', age: 30, position: 'boss' },
{name:'anna',age:35,position:'made'}
];
const youngPeople = people.filter((person) => {
        return person.age < 35
})
console.log(youngPeople)
const developer = people.filter((people) => {
    return people.position=='developer'
})
console.log(developer)