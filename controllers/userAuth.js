const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');

exports.register = catchAsync(async (req, res, next) => {

    const newUser = await User.create(req.body)
    token = jwt.sign({ id: newUser._id }, process.env.SECRET_STR, {
        expiresIn: process.env.LOGIN_EXPIRES
    })

    res.status(201).json({
        status: 'success',
        message: 'User registered successfully',
        token
    });
})


exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({
            status: 'fail',
            message: 'Incorrect email or password'
        });
    }
    
    token = jwt.sign({ id: user._id }, process.env.SECRET_STR, {
        expiresIn: process.env.LOGIN_EXPIRES
    });
    user.password = undefined;

    res.status(200).json({
        status: 'success',
        message: 'Login successful',
        token,
        data:{user}
    })
});


