const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPost = new Schema({
    name: {type : String, default: 'Blog cua Thi quen dat ten'},
    description: String,
    image: String,
    date : {type : Date, default: Date.now},
  });

module.exports  = mongoose.model('BlogPost', BlogPost);
