const { Allergy } = require(',,/../../db/models');

const addAllergy = async (req, res) => {
  const arrBody = req.body;
  try {
    const promiseArray = Promise.all([
      arrBody.map((el) => {
        const { pet_id, input1 } = el;
        return Allergy.create({
          pet_id,
          allergy_name: input1,
        });
      }),
    ]);
    await promiseArray;
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { addAllergy };
