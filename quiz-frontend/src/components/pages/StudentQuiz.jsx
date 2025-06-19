import { useEffect, useState } from 'react';
import axios from 'axios';

const StudentQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    axios.get('/questions')
      .then(res => setQuestions(res.data))
      .catch(err => console.error('Error loading quiz:', err));
  }, []);

  const handleOptionChange = (qid, optionIndex) => {
    setAnswers({ ...answers, [qid]: optionIndex });
  };

  const handleSubmit = () => {
    let s = 0;
    questions.forEach(q => {
      if (answers[q._id] === q.correctAnswerIndex) {
        s++;
      }
    });
    setScore(s);
  };

  return (
    <div>
      <h2>Student Quiz</h2>
      {questions.map((q, i) => (
        <div key={q._id}>
          <p>{i + 1}. {q.question}</p>
          {q.options.map((opt, j) => (
            <label key={j}>
              <input
                type="radio"
                name={q._id}
                value={j}
                onChange={() => handleOptionChange(q._id, j)}
              />
              {opt}
            </label>
          ))}
          <br />
        </div>
      ))}

      <button onClick={handleSubmit}>Submit Quiz</button>

      {score !== null && (
        <h3>Your Score: {score} / {questions.length}</h3>
      )}
    </div>
  );
};

export default StudentQuiz;
