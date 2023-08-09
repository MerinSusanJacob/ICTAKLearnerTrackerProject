const catchAsyncError = require("../middleware/catchAsyncErrors");
const learnerData = require('../model/learnerData');

//authorization 


exports.csvUpload = catchAsyncError((req, res, next) => {
    try {
        console.log('req.body.length=' + req.body.length);
        console.log(req.body)
        //check role

        const userRole = req.headers['x-user-role'];
        console.log('User Role:', userRole);
        if (userRole === 'Admin' || userRole === 'Training Head') {
            const dataToSave = learnerData.insertMany(req.body);
            res.status(200).json({ status: 'OK', message: "Records Inserted Successfully!" })
        } else {
            res.status(403).json({ status: 'Forbidden', message: "Admin or Trainer Access Only!" });
        }


    } catch (error) {
        res.status(500).json({ status: 'Error', message: error.message });
    }
});