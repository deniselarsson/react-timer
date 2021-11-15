const express = require('express') //import express
const app = express()

//set up a rout for the api 
app.get("/api", (req,res) => {
    res.json({"users":["userOne", "userTwo", "userThree"]}) //this is our backend api, gonna fetch users
})
//in order to start up our backend 
app.listen(5000,  ()=>{
    console.log("Server is up and running on 5000")
})