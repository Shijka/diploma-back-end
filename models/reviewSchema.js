const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true
    },
    step_1: {
        file_name: String,
        title: String,
        active: Boolean,
        submittedAt: Date
    },
    step_2: {
        file_name: String,
        title: String,
        active: Boolean,
        submittedAt: Date
    },
    step_3: {
        file_name: String,
        title: String,
        active: Boolean,
        submittedAt: Date
    },
    step_4: {
        file_name: String,
        title: String,
        active: Boolean,
        submittedAt: Date
    },
});

module.exports = mongoose.model("review", reviewSchema);