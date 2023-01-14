const { Schema, model } = require("mongoose");

// Schema to create User model
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },

  reactionBody: { type: String, required: true, maxlength: 280 },

  username: { type: String, required: true },

  createdAt: {
    type: Date,
    default: Date.now(),
    get: function (timeStamp) {
      return new Date(timeStamp);
    },
  },

},
{
    toJSON: {
      getters: true,
    },
    id: false,
 });

 module.exports = Reactions;
