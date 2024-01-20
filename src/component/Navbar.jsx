import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font fixed top-0 w-full bg-white z-10">
        <div className="container mx-auto h-16 flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl">MemeMaker</span>
            </a>
          </Link>
          <nav className="md:ml-auto md:flex md:items-center text-base justify-center">
            <Link to="/">
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link to="/memes">
              <a className="mr-5 hover:text-gray-900">Memes</a>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
