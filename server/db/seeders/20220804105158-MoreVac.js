module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vaccinations', [
      {
        pet_id: 2,
        drug_name: 'РАБИКС',
        drug_date: new Date(Date.parse('2014-06-11 00:00')),
        description: 'вакцинация против бешенства',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pet_id: 3,
        drug_name: 'РЕПТИЛАЙФ',
        drug_date: new Date(Date.parse('2021-02-10 00:00')),
        description: 'Суспензия антигельминтик для рептилий',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pet_id: 4,
        drug_name: 'МУЛЬТИКАН-8',
        drug_date: new Date(Date.parse('2019-09-12 00:00')),
        description: 'Вакцина против чумы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pet_id: 5,
        drug_name: 'Бактопур',
        drug_date: new Date(Date.parse('2021-11-18 00:00')),
        description: 'Ванна против колумнариса(гниение рта)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vaccinations', null, {});
  },
};
