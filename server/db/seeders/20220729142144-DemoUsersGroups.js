module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_groups', [
      {
        group_name: 'Врач',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        group_name: 'Владелец животного',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_groups', null, {});
  },
};
