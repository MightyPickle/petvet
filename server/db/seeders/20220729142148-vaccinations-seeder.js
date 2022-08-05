module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vaccinations', [
      {
        pet_id: 1,
        drug_name: 'РАБИКС',
        drug_date: new Date(Date.parse('2020-12-11 00:00')),
        description: 'вакцинация против бешенства',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pet_id: 1,
        drug_name: 'МУЛЬТИКАН-8',
        drug_date: new Date(Date.parse('2021-10-12 00:00')),
        description: 'Вакцина против чумы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vaccinations', null, {});
  },
};
