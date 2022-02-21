const people=[
{name:'bob',age:20,position:'developer'},
{name:'ana',age:25,position:'designer'},
{name:'suzy',age:30,position:'boss'}
];
// map return array with the same number of elements of the  original array
const ages=people.map((persons)=>{
    return persons.age
});
console.log(ages);

const persons=people.map((item)=>{
    return  {
        first: item.name.toUpperCase(),
        old:item.age
    };
});
console.log(persons)

var h=people.map((person)=>{return `<h2>${person.name}</h2>`})
console.log(h)
document.getElementById("results").innerHTML=h.join('');

