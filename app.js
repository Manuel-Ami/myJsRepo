const express = require('express');
const morgan = require('morgan');
const app = express();  
const userRoute = require('./routes/userRoute');
const errorHandler = require('./utils/errorHandler');

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/users', userRoute);



app.use(errorHandler)

module.exports = app;