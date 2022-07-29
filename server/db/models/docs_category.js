const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Docs_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Docs_Category.init({
    doc_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Docs_Category',
  });
  return Docs_Category;
};
