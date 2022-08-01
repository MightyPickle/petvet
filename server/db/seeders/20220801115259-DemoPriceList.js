module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Price_lists', [
      {
        doc_id: 2,
        service: 'погладить вашу кошку',
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 2,
        service: 'почесать за ушком',
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 2,
        service: 'поцеловать в пузико (кошку, не вас (а может и вас))',
        price: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Price_lists', null, {});
  },
};
