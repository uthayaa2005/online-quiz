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
                                <h2 className="text-2xl font-bold text-sky-700 mb-3">New User?</h2>
                                <p className="text-gray-600 mb-6">Create an account to track your progress and compete with others!</p>
                                <a href="/" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                                    Sign Up Now
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-sky-200 hover:shadow-2xl transition-shadow">
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-sky-700 mb-3">Returning User?</h2>
                                <p className="text-gray-600 mb-6">Welcome back! Login to continue your quiz journey.</p>
                                <a href="/login" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                                    Login Here
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <a
                            href="/quiz"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
                        >
                            Start Quiz
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
