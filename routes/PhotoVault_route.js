const express = require("express");
const auth = require("../middlewares/auth");
const upload  = require("../middlewares/upload");
const PhotoVault_controller = require("../controllers/PhotoVault_Controller");
const router = express.Router();
const rateLimiter = require("../middlewares/rateLimiter");

const limiter = rateLimiter({
    windowSeconds: 60,
    maxRequests: 10,
    keyPrefix: "rl:albums:create",
  });

router.route("/").post(limiter, auth, upload.single("photo"), PhotoVault_controller.uploadPhoto);
router.route("/").get(limiter, auth, PhotoVault_controller.getPhotos);
router.route("/album/:albumId").get(limiter, auth, PhotoVault_controller.getPhotosByAlbum);
router.route("/:id").delete(limiter, auth, PhotoVault_controller.deletePhoto);

module.exports = router;
