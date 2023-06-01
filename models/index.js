const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

//create assosiates
User.hasMany(Post,
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
Comment.belongsTo(User,
    {
        foreignKey: 'user_id',
        onDelete: 'SET NULL'
    }
);
Comment.belongsTo(Post,
    {
        foreignKey: 'user_id',
    }
);
User.hasMany(Comment,
    {
        foreignKey: 'user_id'
    }
);

Post.hasMany(Comment,
    {
        foreignKey: 'user_id'
    }
);



module.exports = { User, Comment, Post };
