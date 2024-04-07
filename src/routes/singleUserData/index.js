var express = require('express');
const Users = require('../../modals/users/Users');
var router = express.Router();
router.get('/singleUser/:email', async (req, res) => {
    const query = {email: req.params.email}
    const result = await Users.findOne(query)
    res.send(result)
})
module.exports= router
