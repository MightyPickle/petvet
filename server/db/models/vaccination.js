const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Vaccination extends Model {
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
  Vaccination.init({
    pet_id: DataTypes.INTEGER,
    drug_name: DataTypes.TEXT,
    drug_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Vaccination',
  });
  return Vaccination;
};
