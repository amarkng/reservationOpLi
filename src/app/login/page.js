'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Username dan Password tidak boleh kosong!');
      return;
    }
    if (username === 'ali' && password === 'ali') {
      alert('Login Berhasil!');
      setError('');
      router.push('/home');
    } else {
      setError('Username atau Password salah!');
    }
  };

  return (
    <div className='flex flex-col md:flex-row min-h-screen overflow-hidden'>
      {/* Sidebar Kiri */}
      <div className='flex-none bg-custom-red text-black flex flex-col justify-center items-center relative w-full md:w-2/5 min-h-screen'>
        <div className='absolute top-4 left-4'>
          <img src='/logoTelkom.png' alt='Telkom Logo' className='w-24' />
        </div>

        <div className='mt-10'>
          <img src='/logoOplib.png' alt='Library Icon' className='w-20 h-20' />
        </div>

        {/* Form Login */}
        <div className='bg-white p-6 rounded-lg shadow-md w-[80%] max-w-sm mt-10'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Username'
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-900'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-900'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className='text-red-700'>{error}</p>}{' '}
            <button
              type='submit'
              className='w-full bg-red-700 text-white py-2 rounded hover:bg-red-800 transition'
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* Sidebar Kanan */}
      <div
        className='hidden md:flex flex-grow bg-cover bg-center'
        style={{
          backgroundImage: `url('/bgLogin.png')`,
        }}
      ></div>

      <footer className='absolute bottom-4 xl:right-4 text-white text-sm md:text-right text-center w-full md:w-auto'>
        <p className='px-4'>
          Copyright © 2024 Telkom University - Open Library. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Login;
