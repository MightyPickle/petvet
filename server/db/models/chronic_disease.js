const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Chronic_disease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Pet, { foreignKey: 'pet_id' });
    }
  }
  Chronic_disease.init({
    pet_id: DataTypes.INTEGER,
    disease: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Chronic_disease',
  });
  return Chronic_disease;
};
