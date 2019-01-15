var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    name: String,
    price: String,
});

module.exports = mongoose.model('order', orderSchema);
