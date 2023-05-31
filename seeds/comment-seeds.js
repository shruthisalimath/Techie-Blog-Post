const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        feedback: "This is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        feedback: "Wow, unbelievable!"
    },
    {
        user_id: 1,
        post_id: 4,
        feedback: "Awesome! kudos to everyone who have contributed"
    },
    {
        user_id: 3,
        post_id: 5,
        feedback: "This is one of our biggest and the most awaited feature! Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        feedback: "This is amazing!"
    },
    {
        user_id: 3,
        post_id: 4,
        feedback: "Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        feedback: "Very useful to know!"
    },
    {
        user_id: 2,
        post_id: 1,
        feedback: "Nice!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;