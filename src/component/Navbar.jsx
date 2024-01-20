import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font fixed top-0 w-full bg-white z-10 h-10vh">
        <div className="container mx-auto  h-10vh flex flex-wrap p-5 flex-col sm:flex-row items-center">
          <Link to="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl">MemeMaker</span>
            </a>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/">
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link to="/memes">
              <a className="mr-5 hover:text-gray-900">memes</a>
            </Link>
          </nav>

        </div>
      </header>
    </div>
  );
}

export default Navbar;
