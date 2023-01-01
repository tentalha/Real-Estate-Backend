// Routes for Users CRUD

const { register_user, login_user } = require('../controllers/userController');
const { userAlreadyExists, userNotExist } = require('../middlewares/authMiddlewares');

const router = require('express').Router();

router.post("/register", userAlreadyExists, register_user);
router.post("/login", userNotExist, login_user);

module.exports = router
