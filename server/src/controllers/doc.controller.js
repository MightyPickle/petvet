const { Doc_info, Categories } = require('../../db/models');

const editDocInfo = async (req, res) => {
  const { type, data } = req.body;
  const { id } = req.session.user;
  console.log(data);
  if (type === 'experience') {
    try {
      const [foundDocInfo, created] = await Doc_info.findOrCreate({
        where: { doc_id: id },
        defaults: {
          clinic_address: 'here shall be address',
          experience: data,
        },
      });
      if (!created) {
        foundDocInfo.experience = data;
        foundDocInfo.save();
      }
      return res.json(foundDocInfo);
    } catch (error) {
      return res.status(500).json({ errorMessage: error.message });
    }
  }
  if (type === 'categories') {
    const foundDocCategories = await Categories.findAll({ where: { doc_id: req.session.user.id } });
  }
};

module.exports = { editDocInfo };
