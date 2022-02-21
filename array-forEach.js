//forEach
//does not return new array
const people=[
{name:'bob',age:20,position:'developer'},
{name:'ana',age:25,position:'designer'},
{name:'suzy',age:30,position:'boss'}
]; 
//1st way
function showPerson(people) {
    console.log(people.name)
}
people.forEach(showPerson)
//2nd way
people.forEach(function (people) {
    console.log(people.age)
})