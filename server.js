// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');

dotenv.config();
const app = express();

app.use(express.json());
 
const upload = multer({ dest: 'uploads/' });

 
app.get('/', (req, res) => {
  res.send('Hello World!');
});

 
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });

