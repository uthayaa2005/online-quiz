const Admin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Dashboard</h2>
        <p className="text-center text-gray-600">Welcome to the Admin Dashboard!</p>
        <p className="mt-4 text-center text-sm text-gray-600">
          Use the navigation links to manage users, quizzes, and more.
        </p>
      </div>
    </div>
  );
}
export default Admin;