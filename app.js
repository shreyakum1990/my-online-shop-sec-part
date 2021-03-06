var express = require('express');
var app = express();
var cors = require('cors');
var originsWhitelist = [
    'http://localhost:4200'
];
var corsOptions = {
    origin: function (origin, callback) {
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
}
app.use(cors(corsOptions));
var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/myonline", {
    useNewUrlParser: true
}, () => {
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
app.use('/api/admin', categoryRouter)

var productRouter = require('./seller');
app.use('/api/seller', productRouter)

var reviewRouter = require('./review');
app.use('/api/customer',reviewRouter)
<<<<<<< HEAD
=======


>>>>>>> e5fdd6e4662e674aff57d0175f2e42f6971ef79f

app.listen(3000, () => {
    console.log('Server Starts');
})