const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const learnerData = require('../model/learnerData');
const jwt = require('jsonwebtoken')
const auth = require('../authz.js/auth');

//to get data

router.get('/getldata/:token',  async (req, res) => {
    const data = await learnerData.find();
    try {
        jwt.verify(req.params.token, "ict",
            (error, decoded) => {
                if (decoded && decoded.email) {
                    res.json(data);
                } else {
                    res.json({ message: "Unauthorised User" });
                }
            })

    } catch (error) {
        res.json({ message: "Not successful" });
    }
})

//to post data
router.post('/postldata',auth,(req, res) => {
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

//to update data
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

//to delete data
router.delete('/delldata/:id', auth, (req, res) => {
    try {
        const ind = req.params.id;
        learnerData.findByIdAndDelete(ind).exec();
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.json({ message: 'Deletion not successful' });
    }
})

module.exports = router;