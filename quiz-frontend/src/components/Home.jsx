const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-sky-700 mb-4">Welcome to QuizMaster</h1>
                    <p className="text-xl text-gray-600 mb-8">Challenge yourself with our interactive quizzes!</p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-sky-200 hover:shadow-2xl transition-shadow">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-sky-700 mb-3">New User?</h2>
                                <p className="text-gray-600 mb-6">Create an account to track your progress and compete with others!</p>
                                <a href="/" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                                    Sign Up Now
                                </a>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-sky-200 hover:shadow-2xl transition-shadow">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-sky-700 mb-3">Returning User?</h2>
                                <p className="text-gray-600 mb-6">Welcome back! Login to continue your quiz journey.</p>
                                <a href="/login" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                                    Login Here
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-sky-200">
                        <h2 className="text-3xl font-bold text-sky-700 text-center mb-8">Quiz Categories</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center p-6 bg-sky-50 rounded-xl border border-sky-200">
                                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-white font-bold">G</span>
                                </div>
                                <h3 className="font-bold text-sky-700 mb-2">General Knowledge</h3>
                                <p className="text-gray-600 text-sm">Test your general knowledge</p>
                            </div>
                            <div className="text-center p-6 bg-sky-50 rounded-xl border border-sky-200">
                                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-white font-bold">A</span>
                                </div>
                                <h3 className="font-bold text-sky-700 mb-2">Aptitude</h3>
                                <p className="text-gray-600 text-sm">Logical reasoning & math</p>
                            </div>
                            <div className="text-center p-6 bg-sky-50 rounded-xl border border-sky-200">
                                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-white font-bold">T</span>
                                </div>
                                <h3 className="font-bold text-sky-700 mb-2">Technical</h3>
                                <p className="text-gray-600 text-sm">Programming & tech skills</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;