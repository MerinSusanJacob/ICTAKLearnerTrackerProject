const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const learnerData = require('../model/learnerData');
const jwt = require('jsonwebtoken'); //for authorisation
const auth = require('../authz.js/auth'); //for authentication

//to get learner data for learners page

router.get('/getldata/:token/:role', auth, async (req, res) => {
    const data = await learnerData.find();
    try {
        jwt.verify(req.params.token, "ict",
            (error, decoded) => {
                if (decoded && decoded.email) {
                    res.json({ "message": "success", data });
                } else {
                    res.json({ message: "Unauthorised User" });
                }
            })

    } catch (error) {
        res.json({ message: "Not successful" });
    }
})

//to post learner data from learners' form
router.post('/postldata', auth, (req, res) => {
    try {
        const item = req.body;
        const newdata = new learnerData(item);
        jwt.verify(req.body.token, "ict",
            (error, decoded) => {
                if (decoded && decoded.email) {
                    newdata.save();
                    res.json({ message: "Posted successfully" });

                } else {
                    res.json({ message: "Unauthorised User" })
                }
            })

    } catch (error) {
        res.json({ message: "Post not successful" });
    }
})

//to update learner data
router.put('/putldata/:id', auth, async (req, res) => {
    try {
        const item = req.body;
        const index = req.params.id;
        const updatedData = learnerData.findByIdAndUpdate(index, item).exec();
        res.json({ message: "Updated successfully" });
    } catch (error) {
        res.json({ message: "Updation not successful" });
    }
})

//to delete learner data
router.delete('/delldata/:id', (req, res) => {

    try {
        const ind = req.params.id;

        learnerData.findByIdAndDelete(ind).exec();
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.json({ message: 'Deletion not successful' });
    }
})

//to upload learner data through csv file 
const { csvUpload } = require("../controller/learnerController");
router.route("/learner/upload").post(csvUpload);

module.exports = router;