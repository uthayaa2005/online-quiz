import { useEffect, useState } from 'react';
import axios from 'axios';


const res = await axios.get('http://localhost:5000/questions'); // full backend URL

const AddQuestion = () => {
  const [form, setForm] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswerIndex: 0,
  });

  const [questions, setQuestions] = useState([]);

  // Fetch questions from backend
  const fetchQuestions = async () => {
    try {
      const res = await axios.get('/questions');
      console.log("Fetched Questions:", res.data);

      // Ensure it's an array before setting
      if (Array.isArray(res.data)) {
        setQuestions(res.data);
      } else {
        console.error("Invalid questions data:", res.data);
        setQuestions([]);
      }
    } catch (err) {
      console.error('Error fetching questions:', err);
      setQuestions([]);
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
    try {
      await axios.post('/add-question', form);
      alert('Question added successfully');
      setForm({ question: '', options: ['', '', '', ''], correctAnswerIndex: 0 });
      fetchQuestions();
    } catch (err) {
      alert('Failed to add question');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/question/${id}`);
      alert('Question deleted');
      fetchQuestions();
    } catch (err) {
      alert('Delete failed');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Question</h2>
      <input
        type="text"
        placeholder="Enter question"
        value={form.question}
        onChange={(e) => setForm({ ...form, question: e.target.value })}
      /><br /><br />

      {form.options.map((opt, i) => (
        <div key={i}>
          <input
            type="text"
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => handleOptionChange(i, e.target.value)}
          /><br />
        </div>
      ))}

      <input
        type="number"
        min="0"
        max="3"
        placeholder="Correct Option Index (0-3)"
        value={form.correctAnswerIndex}
        onChange={(e) => setForm({ ...form, correctAnswerIndex: parseInt(e.target.value) })}
      /><br /><br />

      <button onClick={handleSubmit}>Add Question</button>

      <hr />
      <h3>All Questions</h3>
      {Array.isArray(questions) && questions.length > 0 ? (
        <ul>
          {questions.map((q, index) => (
            <li key={q._id} style={{ marginBottom: '20px' }}>
              <strong>{index + 1}. {q.question}</strong>
              <ul>
                {q.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
              <button onClick={() => handleDelete(q._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No questions available.</p>
      )}
    </div>
  );
};

export default AddQuestion;
