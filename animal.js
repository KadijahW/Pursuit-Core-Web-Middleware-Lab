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

app.get('/animal/:animal',  getAnimal, animalNotFound)

app.listen(port, () => {
    console.log("running")
})