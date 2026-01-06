const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'No description provided'  
    },
    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'private'
    }
}); 


const Album = mongoose.model('Album', albumSchema);
module.exports = Album;