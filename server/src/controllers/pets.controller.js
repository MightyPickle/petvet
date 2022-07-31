const { Pet } = require('../../db/models');

const getAllPets = async (req, res) => {
  const { id } = req.session.user;
  try {
    const pets = await Pet.findAll({ where: { owner_id: id } });
    return res.json(pets);
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { getAllPets };
