const Login = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-sky-200">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-sky-700 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to your account</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            required
                            placeholder="Enter your username"
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required
                            placeholder="Enter your password"
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        Sign In
                    </button>
                </form>
                
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Don't have an account? 
                        <a href="/" className="text-sky-600 hover:text-sky-700 font-medium ml-1 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;