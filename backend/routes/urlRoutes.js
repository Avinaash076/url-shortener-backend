const express = require('express');
const router = express.Router();
const { nanoid } = require('nanoid');
const Url = require('../models/url');

router.post('/shorten', async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ error: 'originalUrl is required' });
    }


    const shortCode = nanoid(7);

    await Url.create({
      originalUrl,
      shortCode
    });

    res.json({
      shortUrl: `http://localhost:3000/${shortCode}`
    });

  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
