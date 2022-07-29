'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users_Pet.init({
    user_id: DataTypes.INTEGER,
    pet_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users_Pet',
  });
  return Users_Pet;
};