const express = require('express');
const router = express.Router();

const { signup, signin, signout, checkauth } = require('../controllers/auth');
const { find, upload, update } = require('../controllers/ImgController');


router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/checkauth', checkauth);
router.get('/getImgs', find);
router.get('/updateImg/:id', update)
router.get('/uploadImg', upload)




module.exports = router;