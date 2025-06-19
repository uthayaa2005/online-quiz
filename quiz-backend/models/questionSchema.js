const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
    validate: [arrayLimit, 'Options must have exactly 4 choices']
  },
  correctAnswerIndex: {
    type: Number,
    required: true,
    min: 0,
    max: 3,
  },
});

function arrayLimit(val) {
  return val.length === 4;
}

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
