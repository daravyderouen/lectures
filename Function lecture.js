//let string = "123"//

//string = "Lafayette"//
//manipulating the string. You can't change a const variable. //

//console.log(string)//
//will console out "Lafayette"//

let string = "Lafayette"

console.log(string.toLocaleUpperCase())

//return this all caps to end user//
console.log("daravy".toLocaleUpperCase())//don't even have to call a variable "let"//


let statement ="It is your birthday."

const splitStr = statement.split('      ')
console.log(splitStr)

let groceryList = "eggs, cheese, bacon, milk"
groceryList = groceryList.split(' ')

//console.log(groceryList[0])//
//let newList = groceryList.replace(',', '')//
//console.log(newList)//


/*let hermoineScore = 44
hermoineScore += 5
hermoineScore *= 2
*/

function log(){
    console.log("I am a function")
}

log()

function calculatorScore (studentScore){
    studentScore += 5
    studentScore *= 2
    //console.log(studentScore)// don't need a log statement
    return studentScore
}

let hisScore =calculatorScore(44)
let herScore =calculatorScore(41)

console.log(herScore)

//a function should always have a return!//

/*function synthax
function example (){
    return
}
In order to get a number out of the function, it needs a return. 

function *insert name of function* (parameter){
    return
}

to call a function, call it by its name and then parentheses
parameter is


*/

function doSomethingElse(withThis){
    console.log(withThis)
}
//doSomethingElse() not defined because we didn't pass anything yet//
doSomethingElse("Example") 

function myName(firstArg, secondArg){
    console.log(firstArg, secondArg)

}

myName("Marcus", "Bass")//it calls for 2 arguments thus needs two strings//
myName("Lebron", "James")
myName("Daravy", "DeRouen")


let purse = 20 

function calculateTotal( item1, item2){
    //console.log(item1 + item2)<< will only give a total of how much the items are but will not give you the change//
    return item1 + item2// will give you the change from 20-total//
}

purse -= calculateTotal(6.99, 9.99)

console.log(purse)

//inner scope examples below//

let age = 21 //global variable//
let name = "Tyler"

function logDetails () {
    //let name = "Tyler"//
    
}
console.log(`My name is ${name} and I am ${age}.`)
//logDetails()//


//you can always look out, but you can't look in. this code will not work because it can't see name. Thus name needs to be outside of function"//


