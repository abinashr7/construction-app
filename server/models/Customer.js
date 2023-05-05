const mongoose = require('mongoose');

const { Schema } = mongoose;

const CustomerSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    phone: String,
    address: String,
});

const CustomerModel = mongoose.model('Customer', CustomerSchema);

module.exports = CustomerModel;