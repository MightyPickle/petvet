const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPass = await bcrypt.hash('123', 10);
    await queryInterface.bulkInsert('Users', [
      {
        first_name: 'Георгий',
        last_name: 'Цамаладзе',
        email: 'tsamaladze@gmail.com',
        phone: '89999873077',
        password: hashedPass,
        user_group: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Юля',
        last_name: 'Тен',
        email: 'u10@gmail.com',
        phone: '89999871488',
        password: hashedPass,
        user_group: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
