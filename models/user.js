const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Data-association");

const userSchema = mongoose.Schema({
    username: String,
    email:String,
    age:Number,
    posts:[
        {
            type: mongoose.Schema.Types.ObjectId,// the id which comes here that belongs to posts
            ref:'post'
        }
    ]
})

module.exports = mongoose.model('user', userSchema);