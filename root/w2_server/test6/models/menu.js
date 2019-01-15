var mongoose = require('mongoose');
var Daily_kcal = require('./daily_kcal');
var Daily_kcalSchema = mongoose.model('daily_kcal').schema;
var Weight = require('./weight');
var WeightSchema = mongoose.model('weight').schema;
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    email: String,
    password: String,
    name: String,
    height: String,
    weight: [WeightSchema],
    target_weight: String,
    gender: String,
    breakfast: String,
    lunch: String,
    dinner: String,
    snack: String,
    daily_kcal: [Daily_kcalSchema],
    missions: Array,
});

module.exports = mongoose.model('users', usersSchema);
