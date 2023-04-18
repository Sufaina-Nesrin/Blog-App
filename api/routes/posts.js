const postRouter = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");


//CREATE
postRouter.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
  }
});


// //UPDATE
postRouter.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.userId === req.body._id) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatePost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(494).json("You can only update your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


// //DELETE
postRouter.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await Post.deleteOne(post);
        res.status(200).json("Your Post has been deleted");
      } catch {
        res.status(500).json(err);
      }
    } else {
      res.status(404).json("You can only delete your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


// //GET POST
postRouter.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POST

postRouter.get("/", async (req, res) => {
  const userId = req.query.user;
  const category = req.query.category;
  try {
    let post;
    if (userId) {
      post = await Post.find({ userId });
    } else if (category) {
      post = await Post.find({
        categories: {
          $in: [category],
        },
      });
    } else {
      post = await Post.find();
    }
    res.status(200).json(post);
  } catch {
    res.status(500).json(err);
  }
});
module.exports = postRouter;
