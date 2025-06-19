const express = require("express");
const router = express.Router();
const Question = require("../models/questionSchema");

// ➕ Add Question (already present)
router.post("/add-question", async (req, res) => {
  const { question, options, correctAnswerIndex } = req.body;

  if (
    !question ||
    !options ||
    !Array.isArray(options) ||
    options.length !== 4 ||
    correctAnswerIndex < 0 ||
    correctAnswerIndex > 3
  ) {
    return res.status(400).json({ message: "Invalid question data" });
  }

  try {
    const newQuestion = new Question({
      question,
      options,
      correctAnswerIndex,
    });

    await newQuestion.save();
    res.status(201).json({ message: "Question added successfully" });
  } catch (err) {
    console.error("Error saving question:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    console.error("Failed to fetch questions", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ❌ Delete a question by ID
router.delete("/question/:id", async (req, res) => {
  try {
    const result = await Question.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(200).json({ message: "Question deleted successfully" });
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  } catch (err) {
    console.error("Error deleting question:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
