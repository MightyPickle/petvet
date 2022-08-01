const {
  Pet,
  Allergy,
  Chronic_disease,
  Vaccination,
  Visit,
  User,
} = require(',,/../../db/models');

const getPet = async (req, res) => {
  const { id } = req.params;
  try {
    const petInfo = await Pet.findOne({
      where: { id },
      include: [
        {
          model: Allergy,
        },
        {
          model: Chronic_disease,
        },
        {
          model: Vaccination,
        },
        {
          model: Visit,
          include: [
            {
              model: User,
              as: 'doctor',
              attributes: ['id', 'first_name', 'last_name'],
            },
          ],
        },
      ],
    });
    // console.log(petInfo);
    return res.json(petInfo);
  } catch (error) {
    return res.status(500).json({ errorMessage: 'Ошибка сервера' });
  }
};

module.exports = { getPet };
