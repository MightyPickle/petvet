const { Op } = require('sequelize');
const {
  User, Doc_schedule, Pet, Vaccination,
} = require('../../db/models');

const getDocSchedule = async (req, res) => {
  const { docId } = req.params;
  const todayDate = new Date();
  const dateFilter = new Date(todayDate.getFullYear, todayDate.getMonth, todayDate.getDate);
  try {
    const schedule = Doc_schedule.findAll({
      where:
        {
          doc_id: docId,
          date_of_receipt: { [Op.gte]: dateFilter },
        },
      include: [
        {
          model: User,
          as: 'patient',
          attributes: ['first_name', 'last_name', 'phone'],
        },
        {
          model: Pet,
          attributes: ['id', 'name', 'specie'],
        },
      ],
    });
    return res.json(schedule);
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { getDocSchedule };
