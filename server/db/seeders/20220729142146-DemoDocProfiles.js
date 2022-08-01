module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Docs_Profiles', [
      {
        doc_id: 2,
        profile_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 2,
        profile_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 2,
        profile_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Docs_Profiles', null, {});
  },
};
