const { Sequelize, Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        body: {

        }
    },
    {
        sequelize
    }
);

module.exports = Comment;