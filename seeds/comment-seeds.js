const { Comment } = require('../models');

const commentData = [{
        user_id: 1,
        post_id: 5,
        comment_text: "This is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, unbelievable!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! kudos to everyone who have contributed"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "This is one of our biggest and the most awaited feature! Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is amazing!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful to know!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;