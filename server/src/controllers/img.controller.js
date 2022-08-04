const path = require('path');
const uuid = require('uuid');
const {
  User,
  Pet,
  Doc_info,
  Price_list,
  Category,
  Profile,
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
  const { id } = req.body;
  try {
    const { img } = req.files;
    const fileName = `${uuid.v4()}.jpg`;
    img.mv(path.resolve(__dirname, '..', '..', 'images', fileName));
    const updated = await Pet.update(
      {
        img: fileName,
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

module.exports = { editUserImg, editPetImg };
