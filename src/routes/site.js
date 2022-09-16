const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/home', siteController.home);
router.get('/newpost', siteController.newpost);
router.get('/search', siteController.search);
router.get('/', siteController.home);



module.exports= router; 