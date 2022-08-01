module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Allergies', [
      {
        pet_id: 1,
        allergy_name: 'Аллергия на рыбу',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pet_id: 1,
        allergy_name: 'Аллергия на молоко',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pet_id: 1,
        allergy_name: 'Аллергия на солнце',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Allergies', null, {});
  },
};
