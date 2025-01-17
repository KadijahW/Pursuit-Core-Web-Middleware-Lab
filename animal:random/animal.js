const express = require('express')
const bodyParser = require('body-parser')

const port = 3000;
const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))

const handleCors = (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*")
    next()
}

app.use(handleCors)

const animalArr = ["zebra", "tiger", "lion", "bear", "turtles"]


const getAnimal = (req, res, next) => {
    let params = req.params.animal

if (animalArr.includes(params)){
   res.json({
    status: "success",
    message: true
   })
}else{
    next()
}
}

const animalNotFound = (req, res, next) => {

    res.json({
        status: "unsuccessful",
        message: false
    })
}

    
const generateFailSpread = (req, res, next) => {
    let floor = parseInt(req.query.floor)
    let  ceil = parseInt(req.query.ceil)
if(isNaN(floor) || isNaN(ceil)){
    res.json({
        status: "failed",
        message: "please enter a number"
    })
   
}else{
    next()
}

}
const floor_ceil_checker = (req, res, next) => {
    let floor = parseInt(req.query.floor)
    let  ceil = parseInt(req.query.ceil)

    if(floor > ceil) {
        res.json ({
            status: "failed",
            message: "First number has to be smaller than last"
        })
    }else{
        next()
    }
}

const generateRandomSpread = (req, res, next) => {
    let floor = parseInt(req.query.floor)
    let  ceil = parseInt(req.query.ceil)
    let random = Math.floor(Math.random() * ceil - floor + 1)

 if(floor < ceil){
        res.json({
            status: "successful",
            message: "Your random number is " + random
       
    })
}
}

app.get('/animal/:animal',  getAnimal, animalNotFound)

app.get('/random', generateFailSpread, floor_ceil_checker, generateRandomSpread)

app.listen(port, () => {
    console.log("running")
})