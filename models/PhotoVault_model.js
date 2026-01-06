const mongoose = require("mongoose");

const PhotoVaultSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    albumId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        nullable: true
    },
    photoUrl: {
        type: String,   
        required: true
    },
    description: {
        type: String,
        default: 'A photo in the vault',
    },
    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'private'
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

const PhotoVault = mongoose.model("PhotoVault", PhotoVaultSchema);
module.exports = PhotoVault;