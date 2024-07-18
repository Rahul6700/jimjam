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
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-80 bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
        />
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition duration-200"
        >
          Login
        </button>
        <button
          onClick={handleAnonymousLogin}
          className="w-full mt-2 py-2 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 transition duration-200"
        >
          Login as Anonymous
        </button>
      </div>
    </div>
  );
};

export default Login;

