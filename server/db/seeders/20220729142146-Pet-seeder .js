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
          birthday: new Date(),
          weight: 4.44,
          color: 'Белый с коричневатыми пятнами',
          sterilized: true,
          sterilized_date: new Date(),
          owner_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pets', null, {});
  },
};
