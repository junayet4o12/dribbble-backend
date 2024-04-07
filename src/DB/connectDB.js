const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.DB_URI;
const connectDB = async () => {
    console.log('connecting');
    await mongoose.connect(uri, { dbName: 'Dribbble' })
    console.log('connected')
}
module.exports = connectDB;