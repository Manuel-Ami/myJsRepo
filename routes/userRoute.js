const express = require('express');
const userAuth = require('../controllers/userAuth');  
const router = express.Router();

router.route('/register').post(userAuth.register);
router.route('/login').post(userAuth.login);        



module.exports = router;