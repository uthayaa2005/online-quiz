import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnf_password, setCnfPassword] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    if (password !== cnf_password) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/signup", {
        fname,
        lname,
        uname,
        email,
        password,
      });

      const { message, isSignup } = res.data;

      if (isSignup) {
        alert(message);
        navigate("/");
      } else {
        alert(message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>
        <form onSubmit={signup} className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={cnf_password}
            onChange={(e) => setCnfPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>

        <p className="mt-2 text-center text-sm text-gray-600">
          Are you an admin?{" "}
          <Link to="/admin-login" className="text-red-600 hover:underline font-medium">
            Admin Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
