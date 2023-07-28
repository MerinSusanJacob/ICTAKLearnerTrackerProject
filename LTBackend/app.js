const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
app.use(morgan('dev'));
require('dotenv').config();
app.use(cors());

require('./db/mongodb');

const userRoute = require('./routes/userRoute')
app.use('/api', userRoute);
const trainerRoute = require('./routes/trainerRoute');
app.use('/api', trainerRoute);
const placementRoute = require('./routes/placementRoute');
app.use('/api', placementRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running in PORT ${PORT}`);
});