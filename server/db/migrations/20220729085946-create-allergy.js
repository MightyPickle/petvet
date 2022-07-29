module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Allergies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pet_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Pets',
          key: 'id',
        },
      },
      allergy_name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Allergies');
  },
};
