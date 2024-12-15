'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    router.push('/login');
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='bg-white py-4 px-6 shadow-md relative'>
      <div className='flex justify-between items-center'>
        {/* Logo dan Judul */}
        <div className='flex items-center gap-4'>
          <img
            src='/logoOplib.png'
            alt='Logo Open Library'
            className='w-10 sm:w-12'
          />
          <h1 className='text-base sm:text-xl font-bold text-black'>
            Open Library Telkom University
          </h1>
        </div>

        {/* Menu Burger untuk Mobile */}
        <button
          className='block sm:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className='text-2xl text-black'>☰</span>
        </button>

        {/* Profil Pengguna (Desktop) */}
        <div className='hidden sm:flex relative' ref={dropdownRef}>
          <div
            className='flex items-center gap-2 cursor-pointer'
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img
              src='/profile.png'
              alt='Profile'
              className='w-8 sm:w-10 h-8 sm:h-10 rounded-full'
            />
            <span className='text-gray-700 text-sm'>Halo, Pengguna</span>
            <span className='transform transition-transform duration-300'>
              {isDropdownOpen ? '▲' : '▼'}
            </span>
          </div>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div
              className='absolute right-0 bg-black text-white rounded shadow-lg w-32'
              style={{
                top: '100%',
                marginTop: '0.5rem',
              }}
            >
              <button
                onClick={handleLogout}
                className='block w-full text-left px-4 py-2 hover:bg-gray-700'
              >
                Keluar
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Menu Dropdown untuk Mobile */}
      {isMenuOpen && (
        <div className='sm:hidden mt-4 bg-white rounded shadow-md'>
          <div
            className='flex items-center gap-2 px-4 py-2 cursor-pointer'
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img
              src='/profile.png'
              alt='Profile'
              className='w-8 h-8 rounded-full'
            />
            <span className='text-gray-700 text-sm'>Halo, Pengguna</span>
          </div>
          {isDropdownOpen && (
            <div className='bg-black text-white rounded shadow-lg w-full'>
              <button
                onClick={handleLogout}
                className='block w-full text-left px-4 py-2 hover:bg-gray-700'
              >
                Keluar
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
