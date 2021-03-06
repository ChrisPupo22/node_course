const express = require('express'); 
const path = require('path');

const router = express.Router(); 

const adminData = require('./admin');

router.get('/',(req, res, next) => {
    // console.log('shop.js:',adminData.products);
    const products = adminData.products; 
    res.render('shop', {prods: products, pageTitle: 'Shop', path:'/'}); 

});

module.exports = router; 