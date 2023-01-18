const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/userController");

const router = require("express").Router();

router.route("/").get(getUsers).post(createUser);


router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router
  .route("/userId/friends/friendId")
  .post(createFriend)
  .delete(deleteFriend);

module.exports = router;
