const { Visit, User } = require(',,/../../db/models');

const addVisit = async (req, res) => {
  const { doc_id, user_id, pet_id, description, diagnose, treatment } =
    req.body;
  try {
    const newVisit = await Visit.create({
      doc_id,
      user_id,
      pet_id,
      visit_date: new Date(),
      description,
      diagnose,
      treatment,
    });
    if (newVisit) return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ errorMessage: 'Ошибка сервера' });
  }
};

module.exports = { addVisit };
