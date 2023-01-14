const { getUsers, createUser } = require('../../controllers/userController');

const router = require('express').Router();

 router.route('/').get(getUsers).post(createUser);

// // /api/users/:userId
// router.route('/:userId').get(getSingleUser);

module.exports = router;