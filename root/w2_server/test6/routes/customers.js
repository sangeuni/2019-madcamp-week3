var express = require('express');
var router = express.Router();
var Customers = require("../models/customers");

router.get('/', function(req, res) {
	Customers.find( {}, { "__v": 0 }, function(err, customers) {
		if(err) return res.status(500).send({ error: 'Database failure' });
		res.json(customers);
	});
});

// Create an address
router.post('/', function(req, res) {
	var customers = new Customers();

	customers.phone = req.body.phone;
	customers.store_name = req.body.store_name;
	customers.customer_number = req.body.customer_number;
	customers.people_count = req.body.people_count;
	customers.token = req.body.token;
	customers.waiting_number = req.body.waiting_number;

	customers.save(function(err) {
		if(err) {
			console.error(err);
			res.json( { result: 0 });
			return;
		}

		res.json( { result: 1 });
	});
});

// Update the address
router.put('/:_id', function(req, res) {
	Customers.update( { _id: req.params._id }, { $set: req.body }, function(err, output) {
		if(err) res.status(500).json( { error: 'Database failure' });
		console.log(output);
		if(!output.n) return res.status(404).json( { error: 'Customers not found' });
		res.json( { message: 'Address updated' });
	});
});

// Delete the address
router.delete('/:_id', function(req, res) {
	Customers.remove( { _id: req.params._id }, function(err, output) {
		if(err) return res.status(500).json( { error: 'Database failure' });
		res.status(204).end();
	});
});


module.exports = router;
