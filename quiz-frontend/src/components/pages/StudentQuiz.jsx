import { useEffect, useState } from 'react';
import axios from 'axios';

const StudentQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/questions')
      .then(res => setQuestions(res.data))
      .catch(err => console.error('Error loading quiz:', err));
  }, []);

  const handleOptionChange = (qid, index) => {
    setAnswers({ ...answers, [qid]: index });
  };

  const handleSubmit = () => {
    let s = 0;
    questions.forEach(q => {
      if (answers[q._id] === q.correctAnswerIndex) s++;
    });
    setScore(s);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-sky-700 mb-6 text-center">Student Quiz</h2>

        {questions.map((q, i) => (
          <div key={q._id} className="mb-6 p-4 border border-gray-200 rounded-xl bg-sky-50">
            <p className="font-semibold text-lg mb-2">{i + 1}. {q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, j) => (
                <label key={j} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={q._id}
                    value={j}
                    onChange={() => handleOptionChange(q._id, j)}
                    disabled={score !== null}
                    className="accent-sky-600"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-6">
          <button
            onClick={handleSubmit}
            disabled={score !== null}
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50"
          >
            Submit Quiz
          </button>
        </div>

        {score !== null && (
          <h3 className="mt-6 text-xl text-center font-semibold text-green-700">
            Your Score: {score} / {questions.length}
          </h3>
        )}
      </div>
    </div>
  );
};

export default StudentQuiz;
