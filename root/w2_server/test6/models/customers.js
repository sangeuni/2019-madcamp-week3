var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/w2");

autoIncrement.initialize(connection);

var customersSchema = new Schema( {
  phone:{type: String},
  store_name:String,
  customer_number: Number,
	people_count: Number,
	token: String,
  waiting_number: Number
});

customersSchema.plugin(autoIncrement.plugin, {
  model:'customer',
  field: 'customer_number',
  startAt: 0,
  increment: 1
});

var Customer = connection.model('customer', customersSchema),
    custom = new Customer();

    custom.save(function(err){
      custom.customer_number === 0;
    custom.nextCount(function(err,count){
      count === 1;
      custom.resetCount(function(err,nextCount){
        nextCount === 0;
    });
  });
});

module.exports = mongoose.model('customer', customersSchema);
