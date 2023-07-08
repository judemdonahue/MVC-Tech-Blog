const { Sequelize, Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Comment.init(
    {
        body: {

        }
    },
    {
        sequelize
    }
);

module.exports = Post;
