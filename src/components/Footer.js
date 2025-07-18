import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-white">Collab<span className="text-indigo-500">Hub</span></h3>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="#features" className="text-gray-400 hover:text-white transition">Features</a>
          </li>
          <li>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials" className="text-gray-400 hover:text-white transition">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
