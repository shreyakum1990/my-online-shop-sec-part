var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/myonline", { useNewUrlParser: true }, () => {
    console.log('Database connected');
})
// route.get('/test',( req,res)=>{
//     res.json({
//         message : "Hello world"
//     })
// })//so for testing purpose 




var accountRouter = require('./account');
app.use('/api/account', accountRouter)

var categoryRouter = require('./category');
app.use('/api/admin',categoryRouter)

app.listen(3000, () => {
    console.log('Server Starts');
})  