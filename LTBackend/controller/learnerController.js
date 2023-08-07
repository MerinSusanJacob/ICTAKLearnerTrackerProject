const catchAsyncError = require("../middleware/catchAsyncErrors");
const learnerData = require('../model/learnerData');
exports.csvUpload = catchAsyncError (async (req,res,next)=> {
    try {
        console.log('req.body.length=' + req.body.length);
        const dataToSave = await learnerData.insertMany(req.body);
        res.status(200).json({ status: 'OK', "Message": "Records Inserted Successfully!" });
    }
    catch (error) {
        res.status(500).json({ status: 'Error', message: error.message });
    }
  });