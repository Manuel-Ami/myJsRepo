const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email address']
    },  
    password: {
        type: String,
        required: true,
        minlength:[6,"Password must have more than 6 characters"]
    },
     role: {
      type: String,
      enum: ["user","admin"],
      default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


userSchema.pre('save', async function(){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    this.confirmPassword = undefined;
})


userSchema.methods.comparePasswords = async function(pswd,pswdDb){
  return await bcrypt.compare(pswd,pswdDb);
}

const User = mongoose.model('User', userSchema);
module.exports = User;