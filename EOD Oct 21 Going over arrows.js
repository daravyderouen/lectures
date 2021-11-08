let desserts = {
    icreCream :{
        ingredients: "milk and sugar",
        calories : 9000,
        tastiness : "maximum"
    },
    cookies : "flour and chocolate",
    cake : "eggs and butter",
    cremeBrulee : "cream and eggs and fire"
}

for(let dessert in desserts){//this is a method when you don't know what the keys(like cookies, cake, cremeBrulee) are//
    console.log(desserts, desserts[dessert]) //desserts just pulls the keys//
}

//let variable = "cookies"
//console.log(desserts[variable])//this is the exact string and key that's in there//
/*
for (dessert in desserts) {
    for (items in dessert) {
        console.log(desserts[dessert])
    } 
}
*/

//HOW TO FIGURE OUT HOW TO GET IN A OBJECT WITHIN AN OBJECT//
console.log(desserts.icreCream.calories)
console.log(desserts.icreCream)//use dot method to log in certain items to return//
console.log(desserts.icreCream["tastiness"])
//gather up 2 weeks of lecture and bring up any questions//

