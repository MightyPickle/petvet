module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Visits',
      [
        {
          doc_id: 12,
          user_id: 13,
          pet_id: 2,
          visit_date: new Date(Date.parse('2014-06-11 00:00')),
          description: 'Плановое обследование',
          diagnose: 'Плановое обследование - вакцинация',
          treatment:
            'Состояние здоровья удовлетворительное - поставлена вакцина РАБИКС',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 4,
          user_id: 13,
          pet_id: 2,
          visit_date: new Date(Date.parse('2018-10-01 00:00')),
          description: 'Прихрамывание на левую лапу',
          diagnose: 'Рана передней левой лапы',
          treatment:
            'Промывание раны раствором хлоргексидина 0.05%',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 5,
          user_id: 13,
          pet_id: 3,
          visit_date: new Date(Date.parse('2021-02-10 00:00')),
          description: 'Жалобы на стул с гельминтами',
          diagnose: 'Заражение гельминтами',
          treatment:
            'Суспензия антигельминтик для рептилий, 1 раза в день, в течении 3 дней.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 6,
          user_id: 13,
          pet_id: 3,
          visit_date: new Date(Date.parse('2021-02-10 00:00')),
          description: 'Жалобы на чейшуйки с мутной жидкостью',
          diagnose: 'Дерматомикозы',
          treatment:
            'Купать в растворе малахитовой зелени из расчета 0,15 миллиграмм на 1 литр в течение 15 минут. Процедуру проводят 3 дня подряд',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 7,
          user_id: 14,
          pet_id: 4,
          visit_date: new Date(Date.parse('2018-02-10 00:00')),
          description: 'Жалобы на тяжелое дыхание',
          diagnose: 'Хронический ринит',
          treatment:
            'Капли назальные для собак, 3 раза в день, в течении 7 дней.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 8,
          user_id: 14,
          pet_id: 4,
          visit_date: new Date(),
          description: 'Жалобы на кашель',
          diagnose: 'Парагрипп',
          treatment:
            'Повышение влажности в среде обитания питомца',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 9,
          user_id: 14,
          pet_id: 5,
          visit_date: new Date(Date.parse('2021-11-18 00:00')),
          description: 'Снижение активности у рыбки',
          diagnose: 'Гниение рта',
          treatment:
            'Бактопур - 1 раз в день в течении 10 минут (5 дней) Ванна против колумнариса(гниение рта)',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          doc_id: 10,
          user_id: 14,
          pet_id: 5,
          visit_date: new Date(Date.parse('2021-12-28 00:00')),
          description: 'Потемнение жабр, снижение активности рыбки',
          diagnose: 'Сапролегниоз',
          treatment:
            'в общем аквариуме применяется стрептоцид, бициллин-5, в отдельной ёмкости - соль, сульфат меди (осторожно, при неправильной дозировке нанесет рыбе вред). Легко предотвратить, если содержать аквариум в чистоте.',
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
