import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === "true");

  useEffect(() => {
    const handleStorage = () => {
      setIsLogin(localStorage.getItem("isLogin") === "true");
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLogin", "false");
    setIsLogin(false);
    window.location.href = "/login";
  };

  return (
    <nav className="bg-white shadow-lg border-b-2 border-sky-100 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Q</span>
          </div>
          <span className="text-2xl font-bold text-sky-700">QuizMaster</span>
        </Link>

        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 text-sky-600 hover:bg-sky-50 focus:outline-none rounded-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`w-full md:flex md:items-center md:w-auto ${dropdownOpen ? '' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-gray-700 text-lg font-medium">
            <li>
              <Link to="/home" className="block py-2 px-3 hover:text-sky-600 transition-colors duration-200">
                Home
              </Link>
            </li>

            

            <li>
              <Link to="/leaderboard" className="block py-2 px-3 hover:text-sky-600 transition-colors duration-200">
                Leaderboard
              </Link>
            </li>

            <li>
              <Link to="/contact" className="block py-2 px-3 hover:text-sky-600 transition-colors duration-200">
                Contact
              </Link>
            </li>

            <li>
              {isLogin ? (
                <button
                  onClick={handleLogout}
                  className="block py-2 px-3 text-left text-red-600 hover:text-red-800 transition-colors duration-200"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="block py-2 px-3 hover:text-sky-600 transition-colors duration-200">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
