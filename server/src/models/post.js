const { Schema, model } = require("mongoose");

const postSchema = Schema({
  body: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

module.exports = model("Post", postSchema);
