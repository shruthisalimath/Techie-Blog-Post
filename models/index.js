const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Post,
    {
       foreignKey: 'user_id'
    }
);
User.hasMany(Comment, 
    {
        foreignKey: 'user_id'
    }
);
Post.belongsTo(User,
    {
        foreignKey: 'user_id',
        onDelete: 'SET NULL'
    }
);
Post.belongsTo(Comment,
    {
        foreignKey: 'user_id'
    }
);
Comment.belongsTo(User ,
    {
        foreignKey: 'user_id',
        onDelete: 'SET NULL'
    }
);
Comment.belongsTo(Post ,
    {
        foreignKey: 'user_id',
    }
);

module.exports = { User, Comment, Post };
