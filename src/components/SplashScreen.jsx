import React, { useEffect, useState } from 'react';
import '../index.css';
import logo from '../assets/dapurbundalogo.jpg';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Change duration as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (!isVisible) {
    return null; // Do not render the splash screen
  }

  return (
    <div className="splash-screen flex items-center justify-center h-screen bg-white">
      <img src={logo} className="w-48 h-48 rounded-lg" alt="" />
    </div>
  );
};

export default SplashScreen;
