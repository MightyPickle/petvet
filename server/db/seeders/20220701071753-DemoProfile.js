let data = 'Собаки,Кошки,Лошади,Хорьки,Рептилии,Грызуны,Амфибии,Птицы,Экзотика,Беспозвоночные,Аквариумные рыбки,Сельскохозяйственные животные'.split(',');
data = data.map((spice) => ({ name: spice, createdAt: new Date(), updatedAt: new Date() }));

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Profiles', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profiles', null, {});
  },
};
