const mongoose = require('mongoose');
const learnerSchema = mongoose.Schema({
    learnerid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    cstatus: {
        type: String,
        required: true
    },
    pstatus: {
        type: String,

    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});
const learnerModel = mongoose.model('learnersData', learnerSchema);
module.exports = learnerModel;