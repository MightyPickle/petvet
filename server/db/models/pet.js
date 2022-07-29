const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, {
        through: 'Users_Pets',
        foreignKey: 'pet_id',
      });
      this.hasMany(models.Vaccination, { foreignKey: 'pet_id' });
      this.hasMany(models.Chronic_disease, { foreignKey: 'pet_id' });
      this.hasMany(models.Allergy, { foreignKey: 'pet_id' });
      this.hasMany(models.Doc_schedule, { foreignKey: 'pet_id' });
      this.hasMany(models.Visit, { foreignKey: 'pet_id' });
    }
  }
  Pet.init({
    name: DataTypes.STRING,
    specie: DataTypes.TEXT,
    breed: DataTypes.STRING,
    sex: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    weight: DataTypes.DOUBLE,
    color: DataTypes.STRING,
    sterilized: DataTypes.BOOLEAN,
    sterilized_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};
