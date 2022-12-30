// Routes for Users CRUD

const { register_user } = require('../controllers/userController');
const { userAlreadyExists } = require('../middlewares/authMiddlewares');

const router = require('express').Router();

router.post("/register", userAlreadyExists, register_user)

module.exports = router
