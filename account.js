var mongoose = require('mongoose');
var express = require('express');
var User = require('./models/user.model')
var route = express.Router();
var jwt = require('jsonwebtoken');
var checkJWT = require('./middleware/check.jwt');


//for testing in postman
route.get('/users', (req, res) => {
    res.json({
        users: "We are comming"
    })
})

route.post('/users', (req, res) => {

    User.findOne({
        email: req.body.email
    }, (err, user) => {
        console.log('user is', user)
        if (user) {
            res.json({
                success: false,
                message: "User registered successfully"
            })
        }
        else {
            var user = new User();
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            user.isSeller = req.body.isSeller;
            user.save();
            res.json({
                success: true,
                message: "User registered successfully"
            })
        }
    })
})

route.post('/login', (req, res) => {
    console.log('Inside login')
    User.findOne({
        email: req.body.email,
        password: req.body.password
    }, (err, user) => {
        console.log('user is', user)
        if (user) {
            var token = jwt.sign({
                user: user
            }, "123456");
            res.json({
                success: true,
                message: token
            })
        }
        else {
            res.json({
                success: true,
                message: "Login incorrect"
            })
        }
    })
})


route.get('/address', checkJWT, (req, res) => {
    console.log("verified user is", req.decoded.user._id);
    User.findOne({
        _id: req.decoded.user._id // filter
    }, (err, user) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                success: true,
                user: user.address
            })
        }
    })
})


route.post('/address', checkJWT, (req, res) => {
    console.log("verified user is", req.decoded.user._id);
    User.updateOne({
        _id: req.decoded.user._id
    }, { address: req.body.address }, (err, user) => {
        res.json({
            success: true,
            message: "Address saved"
        })
    })
})


module.exports = route; // because here router containing all the api