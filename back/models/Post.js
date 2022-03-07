const mongoose = require('mongoose');
const { post } = require('../routes/user');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    title: String,
    description: String,
    category: String,
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
