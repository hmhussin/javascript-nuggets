//date object create using new date() constructor

const date = new Date()
const months = ['january', 'february', 'march', 'april', 'mai', 'june',
    'july', 'August', 'september', 'november', 'december']
//note that week start in sunday 
const days=['sunday','monday','thursday','wednesday','tuesday','friday','saturday']
console.log(date.toString())
console.log(date.getDate())
console.log(days [date.getDay()])
console.log(months[date.getMonth()])
console.log(`today date is ${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`)
const findDate = new Date(10, 4, 2002)
console.log(findDate.toString())