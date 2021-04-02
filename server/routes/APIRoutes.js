const express = require('express');
const router = express.Router();

const { signup, signin, signout, checkauth } = require('../controllers/auth');
const { findOne, findAll, upload, update } = require('../controllers/ImgController');
const { getAboutText,  uploadAboutText } = require('../controllers/aboutTextController');


// ------------ Auth Routes -----------------------
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/checkauth', checkauth);
// ----------- Gallery Routes ---------------------
router.post('/findOneImg', findOne);
router.get('/findAllImgs', findAll);
router.put('/updateImg/:id', update);
router.post('/uploadImg', upload);
// ---------- About text Routes --------------------
router.post('/getAboutText', getAboutText);
router.post('/uploadAboutText', uploadAboutText);




module.exports = router;