module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Chronic_diseases', [
      {
        pet_id: 2,
        disease: 'Панкреатит',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pet_id: 3,
        disease: 'Ринит',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pet_id: 4,
        disease: 'Аденовироз',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pet_id: 5,
        disease: 'Колумнарис',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Chronic_diseases', null, {});
  },
};
