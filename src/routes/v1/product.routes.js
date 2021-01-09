const { ProductController } = require("../../controllers");
const express = require("express");
const productRoutes = express.Router();
const { verifyToken } = require("../../middleware");
const { add } = require("winston");
let validator = require('express-joi-validation').createValidator({ passError: true })
const { addProduct, updateProduct, productId } = require('../../validators').product;
const { createDiscount, updateDiscount } = require('../../validators').discount;







productRoutes.post('/discount', validator.body(createDiscount), ProductController.createDiscount);

productRoutes.get('/discount', ProductController.getDiscounts);

productRoutes.get('/discount/:discountId', ProductController.getDiscounts);

productRoutes.put('/discount', validator.query(productId),validator.body(updateDiscount), ProductController.updateDiscount);


productRoutes.post('/', validator.body(addProduct), ProductController.addProduct);

productRoutes.get('/', ProductController.getProducts);

productRoutes.get('/:productId', ProductController.getProducts);

productRoutes.put('/', validator.query(productId),validator.body(updateProduct), ProductController.updateProduct);


module.exports = productRoutes;
