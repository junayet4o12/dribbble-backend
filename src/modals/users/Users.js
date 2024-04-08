const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const UsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    whyICame: {
        type: Object
    },
    image: {
        type: String
    },
    location: {
        type: String
    }
})

const Users = model('Users', UsersSchema)
module.exports = Users;