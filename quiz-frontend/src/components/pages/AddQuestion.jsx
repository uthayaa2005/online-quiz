import { useEffect, useState } from 'react';
import axios from 'axios';

const AddQuestion = () => {
  const [form, setForm] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswerIndex: 0,
  });
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get('http://localhost:5000/questions');
      setQuestions(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error('Error fetching questions:', err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...form.options];
    updatedOptions[index] = value;
    setForm({ ...form, options: updatedOptions });
  };

  const handleSubmit = async () => {
    const { question, options, correctAnswerIndex } = form;
    if (!question || options.some(opt => !opt.trim()) || correctAnswerIndex < 0 || correctAnswerIndex > 3) {
      alert('Fill all fields correctly');
      return;
    }

    try {
      await axios.post('http://localhost:5000/add-question', form);
      alert('Question added');
      setForm({ question: '', options: ['', '', '', ''], correctAnswerIndex: 0 });
      fetchQuestions();
    } catch (err) {
      console.error(err);
      alert('Error adding question');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/question/${id}`);
      alert('Question deleted');
      fetchQuestions();
    } catch (err) {
      console.error(err);
      alert('Delete failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-sky-700 mb-6 text-center">Add New Question</h2>

        <input
          type="text"
          placeholder="Enter question"
          value={form.question}
          onChange={(e) => setForm({ ...form, question: e.target.value })}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />

        {form.options.map((opt, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => handleOptionChange(i, e.target.value)}
            className="w-full p-3 mb-3 border border-gray-300 rounded-lg"
          />
        ))}

        <input
          type="number"
          min="0"
          max="3"
          placeholder="Correct Option Index (0-3)"
          value={form.correctAnswerIndex}
          onChange={(e) => setForm({ ...form, correctAnswerIndex: parseInt(e.target.value) })}
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          Add Question
        </button>

        <hr className="my-8" />

        <h3 className="text-2xl font-semibold text-sky-700 mb-4">All Questions</h3>
        {questions.length > 0 ? (
          <ul className="space-y-4">
            {questions.map((q, index) => (
              <li key={q._id} className="p-4 border border-gray-200 rounded-xl bg-sky-50">
                <p className="font-semibold text-lg mb-2">{index + 1}. {q.question}</p>
                <ul className="list-disc list-inside text-gray-700 mb-2">
                  {q.options.map((opt, i) => (
                    <li key={i}>{opt}</li>
                  ))}
                </ul>
                <button
                  onClick={() => handleDelete(q._id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No questions yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddQuestion;
