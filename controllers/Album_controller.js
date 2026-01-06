const Album = require('../models/Album_model');
const Photo = require('../models/PhotoVault_model');
const catchAsync = require('../utils/catchAsync');

exports.createAlbum = catchAsync(async (req, res) => {
        const { name, description, visibility } = req.body; 
        const newAlbum = await Album.create({
            userId: req.user._id,
            name,
            description,
            visibility  
        });

        res.status(201).json({ message: 'Album created successfully', album: newAlbum });
    }
);



exports.getAlbums = catchAsync(async (req, res) => {
     
        const albums = await Album.find({ userId: req.user._id }).lean();
        res.status(200).json({ albums });
    } 
);