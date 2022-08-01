module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Chronic_diseases', [
      {
        pet_id: 1,
        disease: 'Насморк',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Chronic_diseases', null, {});
  },
};
