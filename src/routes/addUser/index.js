var express = require('express');
const Users = require('../../modals/users/Users');
const { Resend } = require('resend')
const checkDuplicateUser = require('../../lib/Users/User');
var router = express.Router();
require('dotenv').config();
const resendApiKey = process.env.RESEND_API_KEY;
router.post('/addUser', async (req, res) => {
    const user = req.body;
    const existingUser = await checkDuplicateUser(user)
    console.log(existingUser);
    if (existingUser) {
        return res.send({ message: ' use already exists' })
    }
    const result = await Users.create(user);

    
    const resend = new Resend(resendApiKey);

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'muhammadjunayetmaruf@gmail.com',
        subject: 'Hello World',
        html: '<h2>Thank you for creating profile in <strong>Dribbble</strong></h2>'
    })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    res.send(result)
})
module.exports = router 