var mongoose = require('mongoose');



var productSchema = new mongoose.Schema({
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    image: String,
    email: String,
    title: String,
    description: String,
    price: Number,
    created: {type: Date, default:Date.now}
})
module.exports=mongoose.model('Product',productSchema);