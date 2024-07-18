"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Editor from '../components/Editor';
import Login from '../components/Login'; // Import Login component
import '../styles.css';

const files = ['item1', 'item2', 'item 3'];

const Page = () => {
  const [currentFile, setCurrentFile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('Anonymous');

  const handleFileClick = (file) => {
    setCurrentFile(file);
  };

  const handleLoginSuccess = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  return (
    <div className="page-container">
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <Navbar />
          <div className="main-content">
            <Sidebar files={files} onFileClick={handleFileClick} />
            <Editor file={currentFile} username={username} />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
