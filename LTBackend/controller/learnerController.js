const catchAsyncError = require("../middleware/catchAsyncErrors");
exports.csvUpload = catchAsyncError (async (req,res,next)=> {
    try {
        //console.log('req.body='+req.body);
        //const jData = jsonObj(req.body);
        console.log('req.body.length=' + req.body.length);
        var learnersSuccess = [];
        var learnersError = [];
  var isOk=true;
        for (var i = 0; i < req.body.length; i++) {
            let result = Learner.find({ learnerId: req.body[i]['learnerId'] }, (err, data) => {
                if (data.length > 0) {
                    isOk=false;
                    return res.status(200).json({ status: 'Failed', "Message": "LearnerId duplication found, Upload failed!"});
                }
            })  
        }
  
    
        const dataToSave = await Learner.insertMany(req.body);
            res.status(200).json({ status: 'OK', "Message": "Records Inserted Successfully!" });
    }
    catch (error) {
        res.status(500).json({ status: 'Error', message: error.message });
    }
  } );