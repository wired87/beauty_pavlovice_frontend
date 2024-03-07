import request from '../config/api.config'

function getProduct(body) {
    let response = request.post('/product-request/', body)
    return response;
}

function getAllServices() {
    let response = request.get('/all-services/')
    return response;
}

function getAllAppointment() {
    let response = request.get('/appointment-request/')
    return response;
}

function postAppointment(body) {
    let response = request.post('/appointment-request/', body)
    return response;
}

export const apiServices = {
    getProduct,
    getAllServices,
    getAllAppointment,
    postAppointment
}