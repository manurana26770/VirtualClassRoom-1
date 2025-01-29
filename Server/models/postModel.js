// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const postSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   classId: {
//     type: Schema.Types.ObjectId,
//     ref: 'Class',
//     required: true,
//   },
//   createdBy: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   }
// },{timestamps:true});

// const Post = mongoose.model('Post', postSchema);



const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom',
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    files: [
        {
            type: String, // Path to the uploaded file
        },
    ],
    links: [
        {
            type: String, // URL link
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
