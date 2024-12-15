'use client';

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Sidebar = ({ topPosition }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger  */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed ${topPosition} left-4 z-50 text-white bg-custom-red p-2 rounded-full shadow-lg hover:bg-gray-700 transition hidden sm:block`}
      >
        <AiOutlineMenu size={24} />
      </button>

      {/* Sidebar Content */}
      {isOpen && (
        <div
          className={`fixed ${topPosition} left-4 w-64 bg-white shadow-lg z-50 rounded-md hidden sm:block`}
        >
          <div className='flex justify-between items-center p-4 border-b border-gray-200'>
            <h2 className='text-lg font-bold text-black'>
              Reservasi Open Library Menu
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className='text-gray-600 hover:text-gray-900'
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          <nav className='p-4 space-y-3 text-black'>
            <a
              href='/home'
              className='block hover:text-red-600 transition text-sm font-medium'
            >
              Home
            </a>
            <a
              href='/reservasi'
              className='block hover:text-red-600 transition text-sm font-medium'
            >
              Reservasi Ruangan
            </a>
            <a
              href='/panduan-reservasi'
              className='block hover:text-red-600 transition text-sm font-medium'
            >
              Panduan Reservasi
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Sidebar;
