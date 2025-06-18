import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();

    const hardcodedUsername = "admin";
    const hardcodedPassword = "admin123";
    const hardcodedSecret = "QUIZ2025";

    if (
      username === hardcodedUsername &&
      password === hardcodedPassword &&
      secretCode === hardcodedSecret
    ) {
      alert("Admin login successful!");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid admin credentials or secret code.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>
        <form onSubmit={handleAdminLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Admin Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            placeholder="Secret Code"
            value={secretCode}
            onChange={(e) => setSecretCode(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-md transition"
          >
            Enter Admin Panel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
