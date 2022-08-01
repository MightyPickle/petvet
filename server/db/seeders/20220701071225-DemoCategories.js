module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Терапевт',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Хирург',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гениколог',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Паразитолог',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дерматолог',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Кардиолог',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Онколог',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
