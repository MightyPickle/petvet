const { Chronic_disease } = require(',,/../../db/models');

const addChronic = async (req, res) => {
  const arrBody = req.body;

  try {
    const promiseArray = Promise.all([
      arrBody.map((el) => {
        const { pet_id, input1 } = el;
        return Chronic_disease.create({
          pet_id,
          disease: input1,
        });
      }),
    ]);
    await promiseArray;
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { addChronic };
