const express = require('express');
const router = express.Router();

const { signup, signin, signout, checkauth } = require('../controllers/auth');
const { findOne, findAll, upload, update } = require('../controllers/ImgController');


router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/checkauth', checkauth);
router.post('/findOneImg', findOne);
router.get('/findAllImgs', findAll);
router.put('/updateImg/:id', update);
router.post('/uploadImg', upload);




module.exports = router;