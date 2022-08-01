const { Op } = require('sequelize');
const {
  User, Doc_schedule, Pet, Doc_info, Profile, Category, Price_list,
} = require('../../db/models');

const getDocSchedule = async (req, res) => {
  const { id: docId } = req.params;
  const todayDate = new Date();
  const dateFilter = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
  try {
    const schedule = await Doc_schedule.findAll({
      where:
        {
          doc_id: Number.parseInt(docId, 10),
          date_of_receipt: { [Op.gte]: dateFilter },
        },
      include: [
        {
          model: User,
          as: 'patient',
          attributes: ['first_name', 'last_name', 'phone'],
        },
        {
          model: Pet,
          attributes: ['id', 'name', 'specie'],
        },
      ],
    });
    console.log(schedule);
    return res.json(schedule);
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

const getAllDocs = async (req, res) => {
  const { profile, category } = req.query;
  console.log(req.query);
  try {
    const result = await User.findAll({
      where:
        { user_group: 1 },
      attributes: ['first_name', 'last_name', 'phone', 'email'],
      include: [
        {
          model: Doc_info,
          attributes: ['clinic_address', 'experience'],
        },
        {
          model: Profile,
          attributes: ['name'],
          where: { name: profile },
        },
        {
          model: Category,
          attributes: ['name'],
          where: { name: category },
        },
      ],
    });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error });
  }
};

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
    const foundDocCategories = await Category.findAll({ where: { doc_id: req.session.user.id } });
  }
};

const getOneDoctor = async (req, res) => {
  try {
    const result = await User.findOne({
      where:
        { id: req.params.id },
      attributes: ['first_name', 'last_name', 'phone', 'email'],
      include: [
        {
          model: Doc_info,
          attributes: ['clinic_address', 'experience'],
        },
        {
          model: Price_list,
          attributes: ['service', 'price'],
        },
        {
          model: Profile,
          attributes: ['name'],
        },
        {
          model: Category,
          attributes: ['name'],
        },
      ],
    });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error });
  }
};

const getAllDocsProfiles = async (req, res) => {
  try {
    const result = await Profile.findAll({ attributes: ['id', 'name'] });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllDocsCategories = async (req, res) => {
  try {
    const result = await Category.findAll({ attributes: ['id', 'name'] });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getDocSchedule, getAllDocs, editDocInfo, getOneDoctor, getAllDocsProfiles, getAllDocsCategories,
};
