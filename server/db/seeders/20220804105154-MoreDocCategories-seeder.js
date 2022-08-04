module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Docs_Categories',
      [
        {
          doc_id: 3,
          category_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 3,
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 4,
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 4,
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 5,
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 5,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 6,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 6,
          category_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 7,
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 7,
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 8,
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 8,
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 9,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 9,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 10,
          category_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 10,
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 11,
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 11,
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 12,
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 12,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 12,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Docs_Categories', null, {});
  },
};
