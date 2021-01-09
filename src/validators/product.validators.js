const Joi = require('joi')
const { statusCodes } = require('../configs')

// add joi schema

const addProduct = Joi.object().keys({
   quantityAvailable: Joi.number().required(),
    productName: Joi.string().required(),
    cost: Joi.number().required()
});

const updateProduct = Joi.object().keys({
   quantityAvailable: Joi.number().required(),
   productName: Joi.string().required(),
   cost: Joi.number().required()
});
const productId = Joi.object().keys({
   productId:Joi.number().required()
})

module.exports = {
   addProduct,
   productId,
   updateProduct
}


