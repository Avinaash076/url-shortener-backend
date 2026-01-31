require('dotenv').config();
const connectDB = require('./config/db');
const Url = require('./models/url');

const express = require('express');
const path = require('path');
const urlRoutes = require('./routes/urlRoutes');


const app = express();
connectDB();


app.use(express.json());
app.use('/api/url', urlRoutes);

app.get('/:shortCode', async (req, res) => {
  try {
    const { shortCode } = req.params;

    const url = await Url.findOne({ shortCode });

    if (!url) {
      return res.status(404).send('URL not found');
    }

    res.redirect(url.originalUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
