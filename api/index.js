const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User.js');
const Cars = require('./models/Cars.js');
const Booking = require('./models/Booking.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const imageDownloader = require('image-downloader');
const multer = require('multer');
const fs = require('fs'); 
const Spare = require('./models/Spare.js');
// const mime = require('mime-types');
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg';

app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname+'/uploads'));
app.use(cors({
  credentials: true,
  origin: 'http://127.0.0.1:5173',
}));

// console.log(process.env.MONGO_URL);

// mongoose.connect(process.env.MONGO_URL);
// app.get('/test', (req, res) => {
//     res.json('test is ok')
// });

function getUserDataFromToken(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData)
    });
  });
}

app.post('/register', async (req, res) => {
    mongoose.connect('mongodb+srv://salvatoluice:SBYfKBnzTMqenbIL@cluster0.2dnqjta.mongodb.net/?retryWrites=true&w=majority');
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

app.post('/login', async (req,res) => {
  mongoose.connect('mongodb+srv://salvatoluice:SBYfKBnzTMqenbIL@cluster0.2dnqjta.mongodb.net/?retryWrites=true&w=majority');
  const {email,password} = req.body;
  const userDoc = await User.findOne({email});
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign({
        email:userDoc.email,
        id:userDoc._id
      }, jwtSecret, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json(userDoc);
      });
    } else {
      res.status(422).json('pass not ok');
    }
  } else {
    res.json('not found');
  }
});

app.get('/profile', (req,res) => {
  mongoose.connect('mongodb+srv://salvatoluice:SBYfKBnzTMqenbIL@cluster0.2dnqjta.mongodb.net/?retryWrites=true&w=majority');
  const {token} = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const {name,email,_id} = await User.findById(userData.id);
      res.json({name,email,_id});
    });
  } else {
    res.json(null);
  }
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json(true)
})

app.post('/upload-by-link', async (req,res) => {
  const {link} = req.body;
  const newName = 'photo' + Date.now() + '.jpg';
  await imageDownloader.image({
    url: link,
    dest: __dirname + '/uploads/' +newName, 
  });
  res.json(newName)
});

// Multer middlware for photo uploads
const photosMiddleware = multer({dest: 'uploads'})
app.post('/upload', photosMiddleware.array('photos', 100), (req, res) => {
  // console.log(req.files);
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++){
    const {path, originalname} = req.files[i];
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace('uploads\\', ''));
  }
  res.json(uploadedFiles);
});

app.post('/cars', (req, res) => {
  mongoose.connect('mongodb+srv://salvatoluice:SBYfKBnzTMqenbIL@cluster0.2dnqjta.mongodb.net/?retryWrites=true&w=majority');
  const {token} = req.cookies;
  const {
    title,address,addedPhotos,description,contaact,
    perks,extraInfo,dayprice,weekprice,maxPass,
  } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const carsDoc = await Cars.create({
      owner:userData.id,contaact,
      title,address,photos:addedPhotos,description,
      perks,extraInfo,dayprice,weekprice,maxPass,
    });
    res.json(carsDoc);
  });
});

app.get('/user-cars', (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const {id} = userData;
    res.json( await Cars.find({owner:id}))
  });
});

app.get('/cars/:id', async (req,res) => {
  // res.json(req.params)
  const {id} = req.params;
  res.json(await Cars.findById(id));
})

app.put('/cars', async (req, res) => {
  mongoose.connect('mongodb+srv://salvatoluice:SBYfKBnzTMqenbIL@cluster0.2dnqjta.mongodb.net/?retryWrites=true&w=majority');
  const {token} = req.cookies;
  const {
    id, title,address,addedPhotos,description,contaact,
    perks,extraInfo,dayprice,weekprice,maxPass,
  } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const carsDoc = await Cars.findById(id);
    if(userData.id === carsDoc.owner.toString()) {
      carsDoc.set({
      contaact,
      title,address,photos:addedPhotos,description,
      perks,extraInfo,dayprice,weekprice,maxPass,
      })
      await carsDoc.save();
      res.json('ok');
    }
  });
});

app.get('/cars', async (req, res) => {
  res.json( await Cars.find())
});

app.patch('/booking', async (req, res) => {
  const userData = await getUserDataFromToken(req);
  const {car, checkin, checkout, number, name, email, price} = req.body;
  Booking.create({
    car, checkin, checkout, number, name, email, price,
    user:userData.id,
  }).then((doc) => {
    res.json(doc);
  }).catch((err) => {
    throw err;
  })
});

app.get('/booking', async (req, res) => {
  const userData = await getUserDataFromToken(req);
  res.json( await Booking.find({user:userData.id}).populate('car'))
})

app.post('/spares', async (req, res) => {
  mongoose.connect('mongodb+srv://salvatoluice:SBYfKBnzTMqenbIL@cluster0.2dnqjta.mongodb.net/?retryWrites=true&w=majority');
  const {title, type, category, description, manufacturer, supplier, features, image, price} = req.body;
  Spare.create({
    title, type, category, description, manufacturer, supplier, features, image, price,
  }).then((doc) => {
    res.json(doc);
  }).catch((err) => {
    throw err;
  })
});

app.put('/spares', async (req, res) => {
  mongoose.connect('mongodb+srv://salvatoluice:SBYfKBnzTMqenbIL@cluster0.2dnqjta.mongodb.net/?retryWrites=true&w=majority');
  const {title, type, category, description, manufacturer, supplier, features, image, price} = req.body;
  Spare.create({
    title, type, category, description, manufacturer, supplier, features, image, price,
  }).then((doc) => {
    res.json(doc);
  }).catch((err) => {
    throw err;
  })
});

app.get('/spares', async (req, res) => {
  res.json( await Spare.find())
})

app.listen(4000);