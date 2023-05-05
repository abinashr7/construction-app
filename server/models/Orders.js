const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
    customer_name: String,
    dealer_name: String,
    d_cname: String,
    num_of_mat: String,
    amt: String,
});

const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = OrderModel;