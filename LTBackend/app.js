const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
app.use(morgan('dev'));
require('dotenv').config();
app.use(cors());

require('./db/mongodb'); // to connect to database

app.use('/upload', express.static('./uploads')); //for CSV file upload

//Login routing
const userRoute = require('./routes/userRoute')
app.use('/api', userRoute); 

//Learner module routing
const trainerRoute = require('./routes/trainerRoute');
app.use('/api', trainerRoute);

//Placement module routing
const placementRoute = require('./routes/placementRoute');
app.use('/api', placementRoute);

//User module routing
const usertpRoute=require('./routes/usertpRoute');
app.use('/api',usertpRoute);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running in PORT ${PORT}`);
});