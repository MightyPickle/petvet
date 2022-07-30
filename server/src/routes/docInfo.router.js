const express = require('express');

const router = express.Router();

const {
  User, Doc_info, Profile, Category, Price_list,
} = require('../../db/models');

router.route('api/v1/users/doctors/:id')
  .get(async (req, res) => {
    try {
      const result = await User.findOne({
        where:
          { id: req.params.id },
        attributes: ['first_name', 'last_name', 'phone', 'email'],
        include: {
          model: Doc_info,
          attributes: ['clinic_address', 'experience'],
          include: [
            {
              model: Profile,
              attributes: ['name'],
            },
            {
              model: Category,
              attributes: ['name'],
            },
            {
              model: Price_list,
              attributes: ['service', 'price'],
            },
          ],
        },
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error });
    }
  });

module.exports = router;
