import request from '../config/api.config'

function getProduct(body) {
    let response = request.post('/product-request/', body)
    return response.data;
}

export const apiServices = {
    getProduct
}