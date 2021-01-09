
const { statusCodes, config } = require('../configs');
const { CartService } = require('../services')
const utils = require("./../utils");
class CartController {

}


CartController.createItem = async (req, res, next) => {
    try {
        console.log('test')
        let result = await CartService.createItem({
            ...req.body
        });

        res.status(result.code).json({
            status: config[result.code] || "fail",
            message: result.message,
            data: result.data
        });
    } catch (err) {
        console.log(err);
        next({
            status: statusCodes.HTTP_INTERNAL_SERVER_ERROR
        });
    }
}

CartController.getCartDetails = async (req, res, next) => {
    try {
        console.log('test')
        let params = Object.assign(req.query, req.params);
        let result = await CartService.getCartDetails(params);

        res.status(result.code).json({
            status: config[result.code] || "fail",
            message: result.message,
            data:result.data,
            pageMeta:result.pageMeta
        });
    } catch (err) {
        console.log(err);
        next({
            status: statusCodes.HTTP_INTERNAL_SERVER_ERROR
        });
    }
}





export { CartController };