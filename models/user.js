const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: { type:Datatypes.INTEGER, allowNull:false, primaryKey:true, autoIncrement:true},
        user: { type:Datatypes.STRING, allowNull:false },
        email: { type:Datatypes.STRING, allowNull:false, unique:true, validate: {isEmail:true} },
        password: { type:Datatypes.STRING, allowNull:false, validate: { is: [ `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$` ] } }
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
            beforeUpdate: async (updateUserData) => {
              updateUserData.password = await bcrypt.hash(updateUserData, 10);
              return updateUserData;
            },
          },
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: "user",
        }
);

module.exports = User;