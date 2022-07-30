const {
  Model,
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
      this.belongsTo(models.User_group, { foreignKey: 'user_group' });
      this.hasMany(models.Price_list, { foreignKey: 'doc_id' });
      this.belongsToMany(models.Profile, {
        through: 'Docs_Profiles',
        foreignKey: 'doc_id',
      });
      this.belongsToMany(models.Category, {
        through: 'Docs_Categories',
        foreignKey: 'doc_id',
      });
      this.hasOne(models.Doc_info, { foreignKey: 'doc_id' });
      this.hasMany(models.Pet, { foreignKey: 'owner_id' });
      this.hasMany(models.Doc_schedule, { foreignKey: 'doc_id' });
      this.hasMany(models.Doc_schedule, { foreignKey: 'user_id' });
      this.hasMany(models.Visit, { foreignKey: 'doc_id' });
      this.hasMany(models.Visit, { foreignKey: 'user_id' });
    }
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.TEXT,
    phone: DataTypes.STRING,
    password: DataTypes.TEXT,
    user_group: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
