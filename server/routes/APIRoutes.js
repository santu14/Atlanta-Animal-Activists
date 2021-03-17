const express = require('express');
const router = express.Router();

const { signup, signin, signout, checkauth } = require('../controllers/auth');
const { find, upload, update } = require('../controllers/ImgController');


router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/checkauth', checkauth);
router.get('/getimgs', find);
router.get('/update/:id', update)
router.get('/upload', upload)




module.exports = router;