const router = require('express').Router();
const sequelize = require('../config/connection');
const signupRoutes = require('./signup')
const { User } = require('../models');


router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

module.exports = router;