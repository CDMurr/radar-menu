const { Post } = require("../models");

const postdata = [
  {
    title: "Brisket.",
    comment_text: "The Brisket is the best",
    user_id: 10,
  },
  {
    title: "Sides.",
    comment_text: "The Sides are the best!!!",
    user_id: 8,
  },
  {
    title: "desserts.",
    comment_text: "The desserts are the best",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
