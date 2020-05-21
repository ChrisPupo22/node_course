const express = require('express');
const path = require('path'); 

const router = express.Router();

const productsController = require('../controllers/product')

const products = []; 


router.get('/add-product', productsController); 

router.post('/add-product', (req, res, next) => {
    products.push({ title:req.body.title })
    // console.log(products)
    res.redirect('/')
});

exports.routes = router; 
exports.products = products;  