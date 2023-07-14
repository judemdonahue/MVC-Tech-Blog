const Post = require('./post');
const User = require('./user');
const Comment = require('./comment');


Post.hasMany(Comment, {
    // foreignKey: 'post_id',
    onDelete: 'CASCADE'
  });
  
  Post.belongsTo(User, {
     foreignKey: 'userId',
      as: 'author' });
  
  Comment.belongsTo(User, {
    // foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  

module.exports = {
    Comment,
    User,
    Post
};