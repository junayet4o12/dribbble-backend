const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./src/DB/connectDB');
const applyMiddleWare = require('./src/middlewares/applyMiddlewares');
const addUser = require('./src/routes/addUser/index')
const singleUserData = require('./src/routes/singleUserData/index')
const updateUserData = require('./src/routes/updateUserData/index')
const allUsers = require('./src/routes/allUsers/index')
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()



applyMiddleWare(app)
app.use(addUser)
app.use(singleUserData)
app.use(updateUserData)
app.use(allUsers)
app.all("*", (req, res, next) => {
    const error = new Error(`The requested Url is invalid : [${req?.url}]`)
    error.status = 404;
    next(error)
})
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})
const main = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}
main()