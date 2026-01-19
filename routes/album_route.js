const express = require('express');
const router = express.Router();
const albumController = require('../controllers/Album_controller');
const auth = require('../middlewares/auth');

const rateLimiter = require("../middlewares/rateLimiter");

const limiter = rateLimiter({
    windowSeconds: 60,
    maxRequests: 10,
    keyPrefix: "rl:albums:create",
  });

router.route('/createAlbum').post(limiter, albumController.createAlbum);

router.route('/getAlbums').get(limiter, auth, albumController.getAlbums);



module.exports = router;