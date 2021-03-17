const express = require('express');
const router = express.Router();

const { signup, signin, signout, checkauth } = require('../controllers/auth');
const { find, upload } = require('../controllers/ImgController');


router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/checkauth', checkauth);
router.get('/getimgs', find);
router.get('/upload/:id', upload)



module.exports = router;