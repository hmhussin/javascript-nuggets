//dot notation
var man={
    fname:'hussin',
    age:''
}
console.log(man.fname);
man.age=25;
man.nationality='egypt'
//square bracket notation
console.log(man['age']);
//assign key to variable
var home="town"
man[home]='qena'
console.log(man);
// dynamic using square bracket 
const app={
    state:true,
    'app-name':'',
    jop:''
}
function updateStatus(key,value) 
{
app[key]=value;    
}
updateStatus('jop','printing')
console.log(app);