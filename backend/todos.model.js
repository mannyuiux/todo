const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Defining Schema
let Todo = new Schema({
  todo_desc: {
    type: String
  },
  todo_author: {
    type: String
  },
  todo_category: {
    type: String
  },
  todo_flag: {
    type: Boolean
  },
  todo_delete: {
    type: Boolean
  }
});

module.exports = mongoose.model("Todo", Todo);
