var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;

var storesSchema = new Schema( {
	store_name: {type: String, unique:true},
	waiting_number: Number,
	customer_number: Number,
	menu:[{name:String,
				 price:String}],
	review:[new mongoose.Schema({write: String})]
});

module.exports = mongoose.model('store', storesSchema);
