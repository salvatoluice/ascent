const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10)

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}));

// console.log(process.env.MONGO_URL);

mongoose.connect('mongodb+srv://salvatoluice:SBYfKBnzTMqenbIL@cluster0.2dnqjta.mongodb.net/?retryWrites=true&w=majority')

app.get('/test', (req, res) => {
    res.json('test is ok')
});

// SBYfKBnzTMqenbIL

app.post('/register', async (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {name,email,password} = req.body;
  
    try {
      const userDoc = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password, bcryptSalt),
      });
      res.json(userDoc);
    } catch (e) {
      res.status(422).json(e);
    }
});


app.listen(4000);