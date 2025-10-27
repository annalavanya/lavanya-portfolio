import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Shared LinkedIn icon component
  const LinkedInIcon = () => (
    <div className="flex justify-center md:justify-start bg-blue-400 p-2 rounded-full w-max hover:bg-blue-500 transition-colors">
      <a
        href="https://www.linkedin.com/in/anna-lavanya-t-46578b28b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.svgrepo.com/show/137278/linkedin.svg"
          alt="LinkedIn"
          className="h-4 md:h-4"
        />
      </a>
    </div>
  );

  return (
    <header className="bg-gray-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-indigo-800 hover:text-indigo-600 cursor-pointer">
              Welcome!
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link className="text-blue-50 hover:text-red-500 text-lg" to="/">
              Home
            </Link>
            <Link className="text-blue-50 hover:text-red-500 text-lg" to="/About">
              About
            </Link>
            <Link className="text-blue-50 hover:text-red-500 text-lg" to="/Emploment">
              Employment
            </Link>
            <Link className="text-blue-50 hover:text-red-500 text-lg" to="/Skills">
              Skills
            </Link>
            <Link className="text-blue-50 hover:text-red-500 text-lg" to="/Certificates">
              Certificates
            </Link>

            {/* LinkedIn Icon */}
            <LinkedInIcon />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-50 focus:outline-none text-3xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 pt-4 pb-4 space-y-3">
          <Link
            className="block text-blue-50 hover:text-red-500 text-lg"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="block text-blue-50 hover:text-red-500 text-lg"
            to="/About"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className="block text-blue-50 hover:text-red-500 text-lg"
            to="/Emploment"
            onClick={() => setIsOpen(false)}
          >
            Employment
          </Link>
          <Link
            className="block text-blue-50 hover:text-red-500 text-lg"
            to="/Skills"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            className="block text-blue-50 hover:text-red-500 text-lg"
            to="/Certificates"
            onClick={() => setIsOpen(false)}
          >
            Certificates
          </Link>

          {/* LinkedIn Icon with same style */}
          <LinkedInIcon />
        </div>
      )}
    </header>
  );
};

export default Header;
