import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth',
      });
      setMenuOpen(false); // close mobile menu
    }
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-indigo-600 cursor-pointer" onClick={() => scrollTo('#')}>
          CollabHub
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 font-medium text-gray-600">
          <li><button onClick={() => scrollTo('#features')} className="hover:text-indigo-600">Features</button></li>
          <li><button onClick={() => scrollTo('#portfolio')} className="hover:text-indigo-600">Portfolio</button></li>
          <li><button onClick={() => scrollTo('#testimonials')} className="hover:text-indigo-600">Testimonials</button></li>
          <li><button onClick={() => scrollTo('#contact')} className="hover:text-indigo-600">Contact</button></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow">
          <ul className="space-y-4 text-gray-600 font-medium">
            <li><button onClick={() => scrollTo('#features')} className="block w-full text-left">Features</button></li>
            <li><button onClick={() => scrollTo('#portfolio')} className="block w-full text-left">Portfolio</button></li>
            <li><button onClick={() => scrollTo('#testimonials')} className="block w-full text-left">Testimonials</button></li>
            <li><button onClick={() => scrollTo('#contact')} className="block w-full text-left">Contact</button></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
