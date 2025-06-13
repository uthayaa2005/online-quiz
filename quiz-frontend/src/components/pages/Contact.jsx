const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-sky-200">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-sky-700 mb-2">Contact Us</h1>
                    <p className="text-gray-600">We'd love to hear from you!</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                        <textarea
                            placeholder="Write your message here..."
                            rows="4"
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-sky-400 focus:outline-none transition-colors resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;