const faker = require("faker");

const randomEmail = `liza${Math.floor(
    Math.random() * (100 - 1) + 1
)}@grr.la`;




const phNumberUS = `32163883${Math.floor(Math.random() * (900 - 10) + 1)}`;


let lastName = faker.name.lastName();

var city = faker.address.cityPrefix();

var address = faker.address.secondaryAddress();
// let postcodeUs = `${Math.floor(Math.random() * (123456-12345)+1)}`
// let postcodeCa = `${Math.floor(Math.randomr() *(99999-10000)+1)}`

module.exports = { randomEmail,phNumberUS, city, address, lastName };
