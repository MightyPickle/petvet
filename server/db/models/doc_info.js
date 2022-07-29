const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Doc_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'doc_id' });
    }
  }
  Doc_info.init({
    doc_id: DataTypes.INTEGER,
    exeprience: DataTypes.TEXT,
    clinic_address: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Doc_info',
  });
  return Doc_info;
};
