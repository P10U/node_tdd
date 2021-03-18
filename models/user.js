'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    userType: DataTypes.STRING,
    hourlyRate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  User.associate = (models) => {
    User.belongsTo(models.Company)
    User.hasOne(models.Account)
  }
  return User;
};