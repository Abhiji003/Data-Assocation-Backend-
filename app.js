const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');


app.get("/", function(req, res){
    res.send("Hey!");
})

app.get("/create",async function(req, res){
    let user = await userModel.create({
        username:"Abhi",
        age:24,
        email:"abhijithmukesh@gmail.com"
    });

    res.send(user);
})

app.get("/post/create",async function(req, res){
  let post = await postModel.create({
    postdata:"Hello all",
    user: "688b1b968b8569686882419b",
  })

  let user = await userModel.findOne({_id: "688b1b968b8569686882419b"});
  user.posts.push(post._id);
  await user.save();
  res.send({post,user});//Making an object and sending
})

app.listen(3000);