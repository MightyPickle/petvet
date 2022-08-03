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
      }
    );
    if (updated) {
      return res.sendStatus(200);
    }
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { editSchedules };
