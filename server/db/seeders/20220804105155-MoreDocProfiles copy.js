module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Docs_Profiles', [
      {
        doc_id: 3,
        profile_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 3,
        profile_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 3,
        profile_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 4,
        profile_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 4,
        profile_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 4,
        profile_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 5,
        profile_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 5,
        profile_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 5,
        profile_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 6,
        profile_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 6,
        profile_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 6,
        profile_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 7,
        profile_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 7,
        profile_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 7,
        profile_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 8,
        profile_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 8,
        profile_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 8,
        profile_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 9,
        profile_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 9,
        profile_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 9,
        profile_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 9,
        profile_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 10,
        profile_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 10,
        profile_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 10,
        profile_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 11,
        profile_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 11,
        profile_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 11,
        profile_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 12,
        profile_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 12,
        profile_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doc_id: 12,
        profile_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Docs_Profiles', null, {});
  },
};
