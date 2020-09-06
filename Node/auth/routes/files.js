const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const { checkUserRole, isUserAuthorized } = require('../auth/auth')
const secret = require('../keys/secret');



router.get('/ob-gyn',isUserAuthorized(['OB', 'GYN']), (req, res) => {
    
        res.send({ res: 'good' })
    
})


module.exports = router;
