const express = require('express');
const router = express.Router();

const { signup, signin, signout, checkauth } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/checkauth', checkauth);



module.exports = router;