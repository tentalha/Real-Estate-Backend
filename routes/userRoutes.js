// Routes for Users CRUD

const router = require('mongoose').Router;

router.get('/users', getAllUsers);
router.get('/users:id', getSingleUser);
router.post('/users', postUser);
router.patch('/users:id', EditUser);
router.delete('/users:id', deleteUser);

module.exports = router
