const { Op } = require('sequelize');
const {
  User, Doc_schedule, Pet, Doc_info, Profile, Category, Price_list, Docs_Category, Docs_Profile,
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
  console.log(data, 'this is data from req.body');
  if (type === 'experience') {
    try {
      const [foundDocInfo, created] = await Doc_info.findOrCreate({
        where: { doc_id: id },
        defaults: {
          experience: data,
        },
      });
      if (!created) {
        foundDocInfo.experience = data;
        foundDocInfo.save();
      }
      return res.json(foundDocInfo.experience);
    } catch (error) {
      return res.status(500).json({ errorMessage: error.message });
    }
  }
  if (type === 'Categories_add') {
    console.log('in cat add');
    try {
      const newCategory = await Docs_Category.create({
        doc_id: id,
        category_id: data,
      });
      const category = await Category.findByPk(newCategory.category_id);
      return res.json(category).status(200);
    } catch (error) {
      return res.status(500).json({ errorMessage: error.message });
    }
  }
  if (type === 'Categories_remove') {
    console.log('in cat remove');
    try {
      await Docs_Category.destroy({
        where: {
          doc_id: id, category_id: data,
        },
      });
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errorMessage: error.message });
    }
  }
  if (type === 'Profiles_add') {
    console.log('in prof add');
    try {
      const newProfile = await Docs_Profile.create({
        doc_id: id,
        profile_id: data,
      });
      const profile = await Profile.findByPk(newProfile.profile_id);
      console.log(profile);
      return res.json(profile).status(200);
    } catch (error) {
      return res.status(500).json({ errorMessage: error.message });
    }
  }
  if (type === 'Profiles_remove') {
    console.log('in prof remove');
    try {
      await Docs_Profile.destroy({
        where: {
          doc_id: id, profile_id: data,
        },
      });
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errorMessage: error.message });
    }
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
