module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Visits',
      [
        {
          doc_id: 2,
          user_id: 1,
          pet_id: 1,
          visit_date: new Date(),
          description: 'Жалобы на тяжелое дыхание',
          diagnose: 'Хронический насморк',
          treatment:
            'Капли назальные для собак, 3 раза в день, в течении 7 дней.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 3,
          user_id: 1,
          pet_id: 1,
          visit_date: new Date(),
          description: 'Жалобы на выделения из глаз',
          diagnose: 'Инфекционное заражение слезных мешочков',
          treatment:
            'Капли глазные для собак, 3 раза в день, в течении 2 дней.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Visits', null, {});
  },
};
