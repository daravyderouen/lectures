//these are the first steps, top portion
const express = require('express')//imports express for our file to use
const app = express()//now we're invoking it
const cors = require('cors')//now we're assigning cors to be able to use
//app.use(express.json())//if any body comes with a request this is what we use 
//to get server running
app.use(cors());
app.use(express.json())

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

//next set up our first end point, supply with two arguments, path string, and what they're going to get. If it's a string value don't forget quotes. Req client sends us a request, we send them a response.
app.get('/api/inventory', (req, res) => {
    //set up an if else
    if(req.query.item){
        const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLocaleLowerCase()))
        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }
});

//now open index.html to check to get inventory
//use colon because we don't know what they want back
app.get('/api/inventory/:index', (req, res)=> {
    res.status(200).send(inventory[+req.params.index])
})
//if we need it to be a number we have to convert it on our end. we have to put a conversion like above.


const SERVER_PORT = 5050
app.listen(SERVER_PORT,() => console.log(`Server running on ${SERVER_PORT}`))//then at the bottom we want to add listen. A call back function is to see if the server is running. 
