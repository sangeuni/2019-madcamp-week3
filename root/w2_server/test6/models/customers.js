var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customersSchema = new Schema( {
  store_name:String,
  customer_number: Number,
	people_count: Number,
	token: String
});

module.exports = mongoose.model('customer', customersSchema);
