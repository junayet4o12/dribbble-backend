var express = require('express');
const Users = require('../../modals/users/Users');
var router = express.Router();
router.get('/checkExistingUserName/:userName', async (req, res) => {
    const query = { userName: req.params.userName }
    const result = await Users.findOne(query)
    console.log(result);
    if (result) {
        return res.send({ isExist: true })
    } else {
        return res.send({ isExist: false })
    }
})
module.exports = router
