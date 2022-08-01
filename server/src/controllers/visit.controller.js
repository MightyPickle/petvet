const { Visit, User } = require(',,/../../db/models');

const addVisit = async (req, res) => {
  const { doc_id, user_id, pet_id, description, diagnose, treatment } =
    req.body;
  try {
    const checkDoctor = await User.findOne({ where: { id: doc_id } });
    if (checkDoctor.user_group === 1) {
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
    } else {
      return res.status(500).json({ errorMessage: 'Вы не врач!' });
    }
  } catch (error) {
    return res.status(500).json({ errorMessage: 'Ошибка сервера' });
  }
};

module.exports = { addVisit };
