const { Doc_info, Categories } = require('../../db/models');

const editDocInfo = async (req, res) => {
  const { type, data } = req.body;

  if (type === 'experience') {
    const foundDocInfo = await Doc_info.findOne({ where: { doc_id: req.session.user.id } });
    foundDocInfo.experience = data;
    foundDocInfo.save();
  }
  if (type === 'categories') {
    const foundDocCategories = await Categories.findAll({ where: { doc_id: req.session.user.id } });
  }
};

module.exports = { editDocInfo };
