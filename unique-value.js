const menu=[
    {mname:"pancakes",
    category:"breakfast"},
    {mname:"burger",
    category:"lunch"},
    {mname:"steak",
    category:"dinner"},
    {mname:"bacon",
    category:"breakfast"},
    {mname:"eggs",
    category:"breakfast"},
    {mname:"pasta",
    category:"dinner"}];

    const uniques=new Set(menu.map((meals)=>{
        return meals.category
    }))
   console.log(uniques)
