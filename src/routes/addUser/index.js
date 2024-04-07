var express = require('express');
const Users = require('../../modals/users/Users');
const checkDuplicateUser = require('../../lib/Users/User');
var router = express.Router();
router.post('/addUser', async (req, res) => {
    const user = req.body;
    const existingUser = await checkDuplicateUser(user)
    console.log(existingUser);
    if (existingUser) {
        return res.send({ message: ' use already exists' })
    }
    const result = await Users.create(user);
    res.send(result)
})
module.exports = router 