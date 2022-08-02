module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doc_schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      doc_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      pet_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pets',
          key: 'id',
        },
      },
      date_of_receipt: {
        type: Sequelize.DATE,
      },
      is_close: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('doc_schedules');
  },
};
