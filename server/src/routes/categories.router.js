const express = require('express');

const router = express.Router();

const { Category } = require('../../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const result = await Category.findAll({ attributes: ['id', 'name'] });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error });
    }
  });

module.exports = router;
