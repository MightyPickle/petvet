module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vaccinations', [
      {
        pet_id: 1,
        drug_name: 'SPUTNIK-V',
        drug_date: new Date(),
        description: 'вакцинация ковид',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pet_id: 1,
        drug_name: 'SPUTNIK-X',
        drug_date: new Date(),
        description: 'Вакцинация бустер',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vaccinations', null, {});
  },
};
