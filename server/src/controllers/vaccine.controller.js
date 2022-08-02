const { Vaccination } = require(',,/../../db/models');

const addVaccine = async (req, res) => {
  const arrBody = req.body;
  try {
    const promiseArray = Promise.all([
      arrBody.map((el) => {
        const { pet_id, input1, input2 } = el;
        return Vaccination.create({
          pet_id,
          description: input1,
          drug_name: input2,
          drug_date: new Date(),
        });
      }),
    ]);
    await promiseArray;
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { addVaccine };
