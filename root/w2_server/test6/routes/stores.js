var express 	= require('express');
var router 		= express.Router();
var Stores 	= require("../models/stores");

// Get all address
router.get('/', function(req, res) {
	Stores.find( {}, { "__v": 0 }, function(err, stores) {
		if(err) return res.status(500).send({ error: 'Database failure' });
		res.json(stores);
	});
});

// Create an address
router.post('/', function(req, res) {
	var stores = new Stores();
	stores.store_name = req.body.store_name;
	stores.waiting_number = req.body.waiting_number;
	stores.customer_number = req.body.customer_number;
	stores.token = req.body.token;

	stores.save(function(err) {
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
	Stores.update( { _id: req.params._id }, { $set: req.body }, function(err, output) {
		if(err) res.status(500).json( { error: 'Database failure' });
		console.log(output);
		if(!output.n) return res.status(404).json( { error: 'Stores not found' });
		res.json( { message: 'Address updated' });
	});
});

// Delete the address
router.delete('/:_id', function(req, res) {
	Stores.remove( { _id: req.params._id }, function(err, output) {
		if(err) return res.status(500).json( { error: 'Database failure' });
		res.status(204).end();
	});
});


module.exports = router;
