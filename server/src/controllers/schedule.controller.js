const { Doc_schedule, User } = require('../../db/models');
const { mailToOwner, mailToDoctor } = require('../utils/mailer');

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

    const doc = await User.findOne({
      where: {
        id: Number.parseInt(docId, 10),
      },
      attributes: ['first_name', 'last_name', 'email'],
    });

    const owner = await User.findOne({
      where: {
        id: Number.parseInt(userId, 10),
      },
      attributes: ['first_name', 'last_name', 'email'],
    });
    if (!newSchedule) return res.status(500).json({ errorMessage: 'что то пошло не так' });
    mailToDoctor(doc.email, `${owner.first_name} ${owner.last_name}`, new Date(dateOfreceipt).toLocaleString());
    mailToOwner(owner.email, `${doc.first_name} ${doc.last_name}`, new Date(dateOfreceipt).toLocaleString());
    return res.sendStatus(200);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { editSchedules, addScheduleEntry };
