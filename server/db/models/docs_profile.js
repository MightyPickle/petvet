const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Docs_Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Docs_Profile.init({
    doc_id: DataTypes.INTEGER,
    profile_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Docs_Profile',
  });
  return Docs_Profile;
};
