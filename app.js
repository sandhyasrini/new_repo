const express = require('express')
let app = require("express")();
let bodyParser = require("body-parser");
const arrayItems = require('./routes/getArrayItems.js')
const fetchData = require('./routes/fetchData.js')
const PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use("/" ,(req , res , next) => {
    console.log("inside routes")
    next();
}, arrayItems, fetchData)


app.listen(PORT, () => {
    console.log('App listening on port ', PORT);
});
