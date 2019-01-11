var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;

var storesSchema = new Schema( {
	store_name: String,
	waiting_number: Number,
	customer_number: Number,
	token: String
});

module.exports = mongoose.model('store', storesSchema);
