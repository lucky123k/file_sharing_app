import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    downloadContent: {
        type: Number,
        required: true,
        default: 0
    },
    // size: {type: Number, required: true},
    uuid: {type: String, required: true},
    sender: {type: String, required: false},
    receiver: {type: String, required: false}
});

const File = mongoose.model('FILE', FileSchema);

export default File;