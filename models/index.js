const User = require('./User');
const Post = require('./Post');

// create User and Post associations

// the User can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// the Post belongs to one User
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };