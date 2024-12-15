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
        <div className='flex items-center gap-4'>
          <img
            src='/logoOplib.png'
            alt='Logo Open Library'
            className='w-10 sm:w-12'
            onClick={() => router.push('/home')}
          />
          <h1 className='text-base sm:text-xl font-bold text-black hidden sm:block'>
            Open Library Telkom University
          </h1>
          {/* Mobile Title */}
          <div className='flex sm:hidden items-center gap-2 relative'>
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className='flex items-center gap-2 cursor-pointer'
            >
              <img
                src='/profile.png'
                alt='Profile'
                className='w-8 h-8 rounded-full'
              />
              <span className='text-gray-700 text-sm'>Halo, Pengguna</span>
              <span className='transform transition-transform duration-300'>
                {isDropdownOpen ? '▲' : '▼'}
              </span>
            </div>
            {/* Dropdown Logout */}
            {isDropdownOpen && (
              <div className='absolute right-0 top-full mt-2 bg-white border border-gray-200 shadow-md rounded w-32'>
                <button
                  onClick={handleLogout}
                  className='block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100'
                >
                  Keluar
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Burger Mobile */}
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

      {/* Dropdown Mobile */}
      {isMenuOpen && (
        <div className='sm:hidden mt-4 bg-white rounded shadow-md'>
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
    </nav>
  );
};

export default Navbar;
