const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Allergy extends Model {
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
  Allergy.init({
    pet_id: DataTypes.INTEGER,
    allergy_name: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Allergy',
  });
  return Allergy;
};
