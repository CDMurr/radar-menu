const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'The brisket is the best.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'The sides are the best.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'The desserts are the best.',
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;