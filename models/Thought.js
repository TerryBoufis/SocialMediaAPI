const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction.js");

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },

    createdAt: {
      type: Date,
      default: Date.now(),
      get: function (timeStamp) {
        return new Date(timeStamp);
      },
    },

    username: { type: String, required: true },

    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
