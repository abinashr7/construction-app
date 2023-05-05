const mongoose = require('mongoose');

const { Schema } = mongoose;

const DealerSchema = new Schema({
    cname: String,
    name: String,
    email: { type: String, unique: true },
    password: String,
    phone: String,
    address: String,
    material: String,
    price: Number,
    stock: Number,
});

const DealerModel = mongoose.model('Dealer', DealerSchema);

module.exports = DealerModel;