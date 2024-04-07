var express = require('express');
const Forms = require('../../modals/Forms/Forms');
var router = express.Router();
router.get('/singleUserForm/:email', async (req, res) => {
    const query = {userEmail: req.params.email}
    const result = await Forms.find(query)
    res.send(result)
})
module.exports = router