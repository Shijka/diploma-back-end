const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher',
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher',
        required: true,
    },
    abstract: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin'
    },
    uploaded_date: {
        type: datetime,
        required: true,
    },
    pages: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("subject", subjectSchema);