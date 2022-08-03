const { Doc_schedule } = require('../../db/models');

const editSchedules = async (req, res) => {
  const { id } = req.body;
  try {
    const updated = await Doc_schedule.update(
      {
        is_close: true,
      },
      {
        where: { id },
      },
    );
    if (!updated) return res.status(500).json({ errorMessage: 'что то пошло не так' });
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

const addScheduleEntry = async (req, res) => {
  const {
    docId, petId, userId, dateOfreceipt,
  } = req.body;
  try {
    const newSchedule = await Doc_schedule.create(
      {
        doc_id: Number.parseInt(docId, 10),
        user_id: Number.parseInt(petId, 10),
        pet_id: Number.parseInt(userId, 10),
        date_of_receipt: new Date(dateOfreceipt),
        is_close: false,
      },
    );
    if (!newSchedule) return res.status(500).json({ errorMessage: 'что то пошло не так' });
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { editSchedules, addScheduleEntry };
