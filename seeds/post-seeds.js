const { Post } = require('../models');

const postData = [
    {
        title: "Why MVC is so important!",
        content: "MVC allows developers to maintain a ture separation of concerns, devising their code between the model layer for data, the view layer of the design, and the controller layer for the application logic. ",
        created_at: "May 16, 2023",
        user_id: 3
    },
    {
        title: "Authentication vs. Authorization!",
        content: "There is a diffrence between authentication and authorization. authentication means confirming your own identity, where as authorization means being allowed access to the system.",
        created_at: "May 18, 2023",
        user_id: 1
    },
    {
        title: "Object-Relational Mapping!",
        content: "I have really loved learning about ORMS. Its really simplified the way i create queries in SQL!",
        created_at: "May 09, 2023",
        user_id: 2

    },
    {
        title: "Why choose a Coding Bootcamp!",
        content: "I think a bootcamp is a faster route to start your career",
        created_at: "Feb 13, 2023",
        user_id: 5
    },
    {
        title: "Just Tech News goes public!",
        content: "Just Tech News—a tech news website where users can post, Just Tech News—a tech news website where users can post, upvote, and comment on links to news articles. Use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries",
        created_at: "Apr 27, 2023",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;