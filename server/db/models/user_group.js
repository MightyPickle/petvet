const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User_group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User, { foreignKey: 'user_group' });
    }
  }
  User_group.init({
    group_name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User_group',
  });
  return User_group;
};
