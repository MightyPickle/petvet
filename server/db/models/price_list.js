const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Price_list extends Model {
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
  Price_list.init({
    doc_id: DataTypes.INTEGER,
    service: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Price_list',
  });
  return Price_list;
};
