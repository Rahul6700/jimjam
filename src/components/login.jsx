import React, { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      onLoginSuccess(username);
    } else {
      alert("Please enter a username.");
    }
    setUsername('');
  };

  const handleAnonymousLogin = () => {
    onLoginSuccess('Anonymous');
    setUsername('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-80 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
        <button
          onClick={handleAnonymousLogin}
          className="w-full mt-2 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition duration-200"
        >
          Login as Anonymous
        </button>
      </div>
    </div>
  );
};

export default Login;
