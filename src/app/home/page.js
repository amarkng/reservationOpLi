'use client';

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const handleReservasiClick = () => {
    router.push('/reservasi');
  };
  const handlePanduanClick = () => {
    router.push('/panduan-reservasi');
  };

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className='bg-custom-red text-white text-center py-16 flex-grow flex flex-col justify-center px-4 sm:px-6 md:px-8'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>
          Reservasi Ruangan Mudah
          <br className='hidden md:block' /> dan Cepat di Open Library Telkom{' '}
          <br className='hidden md:block' /> University
        </h1>
        <p className='text-sm sm:text-base md:text-lg font-medium mb-8'>
          Temukan ruang yang tepat untuk setiap kegiatan, dari belajar individu
          <br className='hidden sm:block' /> hingga meeting kolaboratif.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-6'>
          <button
            onClick={handleReservasiClick}
            className='bg-white bg-opacity-90 text-black font-bold py-4 sm:py-5 md:py-7 px-8 sm:px-10 rounded-xl shadow-lg hover:bg-gray-100 transition text-sm sm:text-base md:text-lg'
          >
            Reservasi Ruangan
          </button>
          <button
            onClick={handlePanduanClick}
            className='bg-white bg-opacity-90 text-black font-bold py-4 sm:py-5 md:py-7 px-8 sm:px-10 rounded-xl shadow-lg hover:bg-gray-100 transition text-sm sm:text-base md:text-lg'
          >
            Panduan Reservasi
          </button>
        </div>
      </header>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
