// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white p-4 relative">
        <div className="flex justify-between items-center">
          {/* Hamburger Icon (Visible only on small & medium screens) */}
          <div className="lg:hidden flex items-center" onClick={toggleMenu}>
            <button className="text-3xl">
              <i className="fas fa-bars"></i> {/* Font Awesome hamburger icon */}
            </button>
          </div>

          {/* Logo or Brand Name */}
          <div className="text-3xl font-semibold">Leaderboard</div>
          
          {/* Navbar Links (Visible on large screens) */}
          <div className="hidden lg:flex space-x-6 items-center ml-auto">
            <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
            <Link to="/score" className="hover:bg-gray-700 px-3 py-2 rounded">Score Page</Link>
            <Link to="/popular-players" className="hover:bg-gray-700 px-3 py-2 rounded">Popular Players</Link>
            <Link to="/about-us" className="hover:bg-gray-700 px-3 py-2 rounded">About Us</Link>
            <Link to="/contact-us" className="hover:bg-gray-700 px-3 py-2 rounded">Contact Us</Link>
          </div>
        </div>

        {/* Dropdown Menu (Visible only on small and medium screens when the hamburger icon is clicked) */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:hidden bg-gray-800 space-y-2 px-4 py-3 rounded mt-2`}
        >
          <Link to="/" className="block text-white py-2 hover:bg-gray-700 rounded">Home</Link>
          <Link to="/score" className="block text-white py-2 hover:bg-gray-700 rounded">Score Page</Link>
          <Link to="/popular-players" className="block text-white py-2 hover:bg-gray-700 rounded">Popular Players</Link>
          <Link to="/about-us" className="block text-white py-2 hover:bg-gray-700 rounded">About Us</Link>
          <Link to="/contact-us" className="block text-white py-2 hover:bg-gray-700 rounded">Contact Us</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
