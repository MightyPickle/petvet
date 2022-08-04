const path = require('path');
const uuid = require('uuid');
const {
  User,
  Pet,
  Doc_info,
  Price_list,
  Category,
  Profile,
  Allergy,
  Chronic_disease,
  Vaccination,
  Visit,
} = require('../../db/models');

const editUserImg = async (req, res) => {
  const { id } = req.session.user;
  const img = req.files.files;

  try {
    const fileName = `${uuid.v4()}.jpg`;
    img.mv(path.resolve(__dirname, '..', '..', 'images', fileName));
    await User.update(
      {
        img: fileName,
      },
      {
        where: { id },
      }
    );
    const updatedUser = await User.findOne({
      where: { id },
      include: [Doc_info, Price_list, Category, Profile, Pet],
    });
    const userWithoutPass = JSON.parse(JSON.stringify(updatedUser));
    delete userWithoutPass.password;
    delete userWithoutPass.createdAt;
    delete userWithoutPass.updatedAt;

    return res.json(userWithoutPass);
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};
const editPetImg = async (req, res) => {
  const { id } = req.params;
  try {
    const img = req.files.files;
    const fileName = `${uuid.v4()}.jpg`;
    img.mv(path.resolve(__dirname, '..', '..', 'images', fileName));
    await Pet.update(
      {
        img: fileName,
      },
      {
        where: { id },
      },
    );
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
          order: ['id', 'DESC'],
        },
        {
          model: Visit,
          include: [
            {
              model: User,
              as: 'doctor',
              attributes: ['id', 'first_name', 'last_name'],
              order: ['id', 'DESC'],
            },
          ],
        },
      ],
    });
    return res.json(petInfo);
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = { editUserImg, editPetImg };
