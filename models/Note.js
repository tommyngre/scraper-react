var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var NoteSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// Export the Article model
module.exports = Note;
