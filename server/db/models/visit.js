const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Visit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'doc_id' });
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Pet, { foreignKey: 'pet_id' });
    }
  }
  Visit.init({
    doc_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    pet_id: DataTypes.INTEGER,
    visit_date: DataTypes.DATE,
    description: DataTypes.TEXT,
    diagnose: DataTypes.TEXT,
    treatment: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Visit',
  });
  return Visit;
};
