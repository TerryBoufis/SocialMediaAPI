const {
    getThought,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
  } = require("../../controllers/thoughtController");
  
  const router = require("express").Router();
  
  router.route("/").get(getThought).post(createThought);
  
  // /api/user/:userId
  router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);
  
  router
    .route("/thoughtId/reactions/reactionId")
    .post(createReaction)
    .delete(deleteReaction);
  
  // // /api/users/:userId
  // router.route('/:userId').get(getSingleUser);
  
  module.exports = router;