const express = require('express');
const router = express.Router();
const { register, login, loadUser } = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/user', auth, loadUser);

module.exports = router;
