var express = require('express');
var route = express.Router();
var Product = require('./models/product.model');
var checkJWT = require('./middleware/check.jwt');
var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);

// route.get('/products/users',checkJWT,(req,res)=>{
//     Product.find({
//         owner : req.decoded.user._id
//     },(err,products)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             res.json({
//                 success : true,
//                 products : products
//             })
//         }
//     })
// })


route.delete('/products/:id', checkJWT, (req, res) => {
    Product.remove({
        _id: req.params.id
    }, (err, product) => {
        if (err) {
            console.log(err)
        } else {
            res.json({
                success: true,
                message: "Product deleted successfully"
            })
        }
    })
})


route.get('/category/:id', checkJWT, (req, res) => {
    Product.find({
            category: req.params._id
        })
        .populate('owner')
        .populate('category')
        .exec((err, products) => {
            res.json({
                success: true,
                products: products
            })
        })
})


route.get('/products/users', checkJWT, (req, res) => {
    Product.find({
            owner: req.decoded.user._id
        })
        .populate('owner')
        .populate('category')
        .populate('reviews')

        .exec((err, products) => {
            if (err) {
                console.log(err)
            } else {
                res.json({
                    success: true,
                    products: products
                })
            }
        })
})

route.put('/products/:id', checkJWT, (req, res) => {
    Product.update({
        _id: req.params.id
    }, req.body, function (err, updatedProduct) {
        if (err) {
            console.log('The error is', err)
        }
        res.json({
            success: true,
            message: 'Product updated successfully'
        })
    })
})

route.post('/products', checkJWT, (req, res) => {
    var product = new Product();
    product.category = req.body.category;
    product.owner = req.decoded.user._id;
    product.image = req.body.image;
    product.title = req.body.title;
    product.description = req.body.description;
    product.price = req.body.price;
    product.save();
    res.json({
        success: true,
        message: "Product saved successfully"
    })
})

route.get('/productlist', checkJWT, (req, res) => {
    Product.find({

    }, (err, products) => {
        if (err) {
            console.log(err)
        } else {
            res.json({
                success: true,
                products: products
            })
        }
    })
})

route.get('/productbyid/:id', checkJWT, (req, res) => {
    Product.findOne({
        _id: req.params.id
    }, (err, product) => {
        if (err) {
            console.log(err)
        } else {
            res.json({
                success: true,
                product: product
            })
        }
    })
})


module.exports = route;