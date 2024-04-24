const router = require("express").Router();
const { getUsers, getUser, createUser, updateUser, deleteUser, login } = require('../controllers/user.controller');
const { authentication } = require('../middlewares/index');

//Sign up
router.post('/', createUser);

//login
router.post('/login',  login);

//get all users
router.get('/', getUsers);

//get user by id
router.get('/:id', authentication, getUser);

//update an user
router.put('/:id', authentication, updateUser);

//delete an user
router.delete('/:id', authentication, deleteUser)

module.exports = router;