const express = require('express');
const router = express.Router();
const albumController = require('../controllers/Album_controller');
const auth = require('../middleware/auth');


router.route('/createAlbum').post(auth, albumController.createAlbum)
router.route('/getAlbums').get(auth, albumController.getAlbums);



module.exports = router;