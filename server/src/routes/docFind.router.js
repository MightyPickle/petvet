const express = require('express');

const router = express.Router();

const {
  User, Doc_info, Profile, Category,
} = require('../../db/models');

router.route('/')
  .get(async (req, res) => {
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
            attributes: ['clinic_address', 'exeprience'],
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
  });

module.exports = router;
