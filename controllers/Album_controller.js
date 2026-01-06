const Album = require('../models/Album_model');
const Photo = require('../models/PhotoVault_model');
const catchAsync = require('../utils/catchAsync');

exports.createAlbum = catchAsync(async (req, res) => {
        const { name, description, visibility } = req.body; 
        const newAlbum = await Album.create({
            userId: req.user.id,
            name,
            description,
            visibility  
        });
     
        res.status(201).json({ message: 'Album created successfully', album: newAlbum });
    }
);


exports.getAlbums = catchAsync(async (req, res) => {
      console.log(req.user);
        const albums = await Album.find({ userId: req.user.d });
        res.status(200).json({ albums });
    } 
);