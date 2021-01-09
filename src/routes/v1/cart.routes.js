const { CartController } = require("../../controllers/index");
const express = require("express");
const cartRoutes = express.Router();
const { verifyToken } = require("../../middleware")
let validator = require('express-joi-validation').createValidator({ passError: true })
const { createItem} = require('../../validators').cart;





cartRoutes.post('/item',validator.body(createItem), CartController.createItem);

cartRoutes.get('/:cartId/:userId', CartController.getCartDetails);

cartRoutes.get('/', CartController.getCartDetails);


module.exports = cartRoutes;
