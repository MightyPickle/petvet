const { Op } = require('sequelize');
const {
  User,
  Doc_schedule,
  Pet,
  Doc_info,
  Profile,
  Category,
  Price_list,
  Docs_Category,
  Docs_Profile,
} = require('../../db/models');

const getDocSchedule = async (req, res) => {
  const { id: docId } = req.params;
  const { year, month, date } = req.query;
  const startDate = new Date(
    Number.parseInt(year, 10),
    Number.parseInt(month, 10),
    Number.parseInt(date, 10),
    0,
  );

  const endDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() + 1,
  );

  try {
    const schedule = await Doc_schedule.findAll({
      where: {
        doc_id: Number.parseInt(docId, 10),
        [Op.and]: [
          { date_of_receipt: { [Op.gte]: startDate } },
          { date_of_receipt: { [Op.lt]: endDate } },
        ],
        is_close: false,
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
    const daysWithVisits = await Doc_schedule.findAll({
      where: {
        doc_id: Number.parseInt(docId, 10),
        date_of_receipt: { [Op.gte]: new Date() },
        is_close: false,
      },
      attributes: ['date_of_receipt'],
    });
    return res.json({ schedule, daysWithVisits });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

const getAllDocs = async (req, res) => {
  const { profile, category } = req.query;

  console.log('query>>>', profile, category);

  const queryFilter = {
    category: {},
    profile: {},
  };

  if (profile !== 'undefined') queryFilter.profile.name = profile;
  if (category !== 'undefined') queryFilter.category.name = category;

  try {
    const result = await User.findAll({
      where: {
        user_group: 1,
      },
      attributes: ['id', 'first_name', 'last_name', 'phone', 'email', 'img'],
      include: [
        {
          model: Doc_info,
          attributes: ['clinic_address', 'experience'],
        },
        {
          model: Profile,
          attributes: ['name'],
          where: queryFilter.profile,
        },
        {
          model: Category,
          attributes: ['name'],
          where: queryFilter.category,
        },
      ],
    });
    // console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error });
  }
};

const getDocByName = async (req, res) => {
  const { doctorname } = req.query;

  const [partOne, partTwo] = doctorname.split(' ');

  const queryFilter = {
    doctorname: {},
  };

  if (doctorname !== 'undefined' && doctorname) {
    queryFilter.doctorname = {
      [Op.or]: [
        {
          first_name: {
            [Op.like]: `%${partOne.split('')[0].toUpperCase()}${partOne
              .split('')
              .slice(1)
              .join('')
              .toLowerCase()}%`,
          },
        },
        {
          last_name: {
            [Op.like]: `%${partOne.split('')[0].toUpperCase()}${partOne
              .split('')
              .slice(1)
              .join('')
              .toLowerCase()}%`,
          },
        },
        {
          first_name: {
            [Op.like]: `%${partTwo?.split('')[0]?.toUpperCase()}${partTwo
              ?.split('')
              ?.slice(1)
              ?.join('')
              ?.toLowerCase()}%`,
          },
        },
        {
          last_name: {
            [Op.like]: `%${partTwo?.split('')[0]?.toUpperCase()}${partTwo
              ?.split('')
              ?.slice(1)
              ?.join('')
              ?.toLowerCase()}%`,
          },
        },
      ],
    };
  }

  try {
    const result = await User.findAll({
      where: {
        user_group: 1,
        ...queryFilter.doctorname,
      },
      attributes: ['id', 'first_name', 'last_name', 'phone', 'email', 'img'],
      include: [
        {
          model: Doc_info,
          attributes: ['clinic_address', 'experience'],
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
          doc_id: id,
          category_id: data,
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
          doc_id: id,
          profile_id: data,
        },
      });
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errorMessage: error.message });
    }
  }

  if (type === 'Price_lists_add') {
    console.log('in price add');
    try {
      const newService = await Price_list.create({
        doc_id: id,
        service: data.service,
        price: data.price,
      });
      return res.json(newService).status(200);
    } catch (error) {
      return res.status(500).json({ errorMessage: error.message });
    }
  }

  if (type === 'Price_lists_remove') {
    console.log('in price remove');
    try {
      await Price_list.destroy({
        where: {
          id: data,
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
      where: { id: req.params.id, user_group: 1 },
      attributes: ['id', 'first_name', 'last_name', 'phone', 'email', 'img'],
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
        {
          model: Doc_schedule,
          as: 'doctor',
          attributes: ['date_of_receipt'],
          // where: { date_of_receipt: { [Op.gte]: new Date() } },
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
  getDocSchedule,
  getAllDocs,
  editDocInfo,
  getOneDoctor,
  getAllDocsProfiles,
  getAllDocsCategories,
  getDocByName,
};
