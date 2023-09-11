// import Message from './models/Message';
const User = require('./models/User');
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// const passport = require('passport');
const LocalStrategy = require('passport-local');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(passport.initialize);
const jwt = require('jsonwebtoken');

mongoose
  .connect(
    'mongodb+srv://rushibhumkar11:gopalbh11@cluster0.3ts7402.mongodb.net/',
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // },
  )
  .then(() => {
    console.log('Connected to mongodb');
  })
  .catch((err:any) => {
    console.log('Error connecting to mongodb', err);
  });

app.listen(port, () => {
  console.log('Server running on port 8000');
});

// const User = require('./models/User');
// const Message = require('./models/Message');

app.get('/',(req:express.Request,res:express.Response)=>{
  res.send("working fine")
})

app.post('/register', (req:express.Request,res:express.Response) => {
  const {name, email, password, image} = req.body;

  // create new user object
  const newUser = new User({name, email, password, image});

  // save the user to the database
  newUser
    .save()
    .then(() => {
      res.status(200).json({message: 'User registered successfully'});
    })
    .catch((err:any) => {
      console.log('Error registering user', err);
      res.status(500).json({message: 'Error registering the user!'});
    });
});
