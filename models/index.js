const Post = require('./post');
const User = require('./user');
const Comment = require('./comment');


Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
  });
  
  Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  

module.exports = {
    Comment,
    User,
    Post
};