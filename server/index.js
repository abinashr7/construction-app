const express = require('express');
var cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const Customer = require('./models/Customer.js');
const Dealer = require('./models/Dealer.js');
const Order = require('./models/Orders.js');
var app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'y7tr8b4yc87y28ud2tfxcgfcv';

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

mongoose.connect(process.env.MONGO_URL);
//console.log(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('Connected!');
});


app.post('/cregister', async (req, res) => {
    const { name, email, password, phone, address } = req.body;

    try {
        const custDoc = await Customer.create({
            name, email,
            password: bcrypt.hashSync(password, bcryptSalt),
            phone, address,
        })
        res.json(custDoc);
    }
    catch (e) {
        res.status(422).json(e);
    }
});


app.post('/dregister', async (req, res) => {
    const { cname, name, email, password, phone, address, material, price, stock } = req.body;

    try {
        const dealerDoc = await Dealer.create({
            cname, name, email,
            password: bcrypt.hashSync(password, bcryptSalt),
            phone, address, material,
            price, stock,
        })
        res.json(dealerDoc);
    }
    catch (e) {
        res.status(422).json(e);
    }
});


app.post('/clogin', async (req, res) => {
    const { email, password } = req.body;
    const custInfo = await Customer.findOne({ email });
    if (custInfo) {
        const passOk = bcrypt.compareSync(password, custInfo.password);
        if (passOk) {
            jwt.sign({ email: custInfo.email, id: custInfo._id }, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(custInfo);
            });
        } else {
            res.status(422).json('pass not ok');
        }
    }
    else {
        res.json(null);
    }
});


app.post('/dlogin', async (req, res) => {
    const { email, password } = req.body;
    const dealerInfo = await Dealer.findOne({ email });
    if (dealerInfo) {
        const passOk = bcrypt.compareSync(password, dealerInfo.password);
        if (passOk) {
            jwt.sign({ email: dealerInfo.email, id: dealerInfo._id }, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(dealerInfo);
            });
        } else {
            res.status(422).json('pass not ok');
        }
    }
    else {
        res.json(null);
    }
});


app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, data) => {
            if (err) throw err;
            let user = await Customer.findById(data.id);
            if (user === null) {
                user = await Dealer.findById(data.id);
            }
            res.json({ name: user.name, email: user.email });
        });
    }
    else {
        res.json(null);
    }
});


app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
});


app.post('/materials', async (req, res) => {
    const { material } = req.body;
    const d = await Dealer.find({ material });
    res.json(d);
});


app.post('/order', async (req, res) => {
    const { customer_name, dealer_name, d_cname, num_of_mat, amt } = req.body;
    try {
        const orderDoc = await Order.create({
            customer_name,
            dealer_name,
            d_cname,
            num_of_mat,
            amt
        });
        res.json(orderDoc);
    }
    catch (e) {
        res.status(422).json(e);
    }
});


app.post('/myorders', async (req, res) => {
    const { userdata } = req.body;
    let d = await Order.find({ customer_name: userdata });

    // customer
    if (d.length !== 0) {
        const resp = await Promise.all(d.map(async elm => {
            return { name: elm.d_cname, no: elm.num_of_mat, amt: elm.amt }
        }));
        return res.json(resp);
    }

    d = await Order.find({ dealer_name: userdata });
    // dealer
    if (d.length !== 0) {
        const resp = await Promise.all(d.map(async (elm) => {
            const cus = await Customer.findOne({ name: elm.customer_name });
            return {
                name: elm.customer_name, no: elm.num_of_mat, amt: elm.amt, addr: cus.address,
                ph: cus.phone, mail: cus.email
            }
        }));
        return res.json(resp);
    }
});


app.listen(4000);
