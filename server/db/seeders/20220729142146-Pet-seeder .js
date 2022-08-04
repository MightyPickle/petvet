module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pets',
      [
        {
          name: 'Бобик',
          specie: 'собака',
          breed: 'лайка',
          sex: 1,
          birthday: new Date(Date.parse('2019-09-14 00:00')),
          weight: 3.40,
          color: 'Белый',
          sterilized: true,
          sterilized_date: new Date(Date.parse('2020-10-14 00:00')),
          owner_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pets', null, {});
  },
};
