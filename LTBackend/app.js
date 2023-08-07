const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
app.use(morgan('dev'));
require('dotenv').config();
app.use(cors());

app.use('/upload', express.static('./uploads'));

require('./db/mongodb');

const userRoute = require('./routes/userRoute')
app.use('/api', userRoute); 

const trainerRoute = require('./routes/trainerRoute');
app.use('/api', trainerRoute);

const placementRoute = require('./routes/placementRoute');
app.use('/api', placementRoute);

const usertpRoute=require('./routes/usertpRoute');
app.use('/api',usertpRoute);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running in PORT ${PORT}`);
});