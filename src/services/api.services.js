import request from '../config/api.config'

function getProduct(body) {
    let response = request.post('/product-request/', body)
    return response;
}

export const apiServices = {
    getProduct
}