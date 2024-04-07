var express = require('express');
const Users = require('../../modals/users/Users');
var router = express.Router();
router.get('/allUsers', async (req, res) => {
    const result = await Users.find()
    res.send(result)
})
module.exports= router
