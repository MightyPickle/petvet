const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Doc_schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'doc_id', as: 'doctor' });
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'patient' });
      this.belongsTo(models.Pet, { foreignKey: 'pet_id' });
    }
  }
  Doc_schedule.init({
    doc_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    pet_id: DataTypes.INTEGER,
    date_of_receipt: DataTypes.DATE,
    is_close: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Doc_schedule',
  });
  return Doc_schedule;
};
