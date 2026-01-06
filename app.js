const express = require('express');
const morgan = require('morgan');
const app = express();  
const userRoute = require('./routes/userRoute');
const albumRoute = require('./routes/album_route');
const errorHandler = require('./utils/errorHandler');

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/users', userRoute);
app.use('/api/v1/albums', albumRoute);



app.use(errorHandler)

module.exports = app;