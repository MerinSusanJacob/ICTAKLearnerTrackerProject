const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const jwt = require('jsonwebtoken')
const learnerData = require('../model/learnerData');
const authpl = require("../authz.js/authpl")

//to get data
router.get('/getpdata/:token/:role', authpl, async (req, res) => {
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

//to post data
router.post('/postpdata', (req, res) => {
    try {
        const item = req.body;
        const newdata = new learnerData(item);
        newdata.save();
        res.json({ message: "Posted successfully" });
    } catch (error) {
        res.json({ message: "Post not successful" });
    }
})

//to update data
router.put('/putpdata/:id', async (req, res) => {
    try {
        const item = req.body;
        const index = req.params.id;
        const updatedData = learnerData.findByIdAndUpdate(index, item).exec();
        res.json({ message: "Updated successfully" });
    } catch (error) {
        res.json({ message: "Updation not successful" });
    }
})

module.exports = router;