'use client';

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const ReservasiRuangan = () => {
  // Data dummy reservasi
  const reservations = [
    {
      room: 'Tel-U BGD - Mini Studio',
      startTime: '08:30',
      endTime: '09:30',
      status: 'Attend',
      color: 'bg-green-400',
    },
    {
      room: 'Tel-U BGD - Mini Studio',
      startTime: '09:30',
      endTime: '11:00',
      status: 'Approved',
      color: 'bg-blue-400',
    },
    {
      room: 'Tel-U BGD - Open Discussion Room',
      startTime: '13:00',
      endTime: '14:30',
      status: 'Approved',
      color: 'bg-blue-400',
    },
    {
      room: 'Tel-U BGD - Ruang Diskusi 02',
      startTime: '11:00',
      endTime: '12:30',
      status: 'Request',
      color: 'bg-yellow-400',
    },
    {
      room: 'Tel-U BGD - Ruang Diskusi 12',
      startTime: '14:30',
      endTime: '16:00',
      status: 'Request',
      color: 'bg-yellow-400',
    },
  ];

  const rooms = [
    'Tel-U BGD - Mini Studio',
    'Tel-U BGD - Mini Theater',
    'Tel-U BGD - Open Discussion Room',
    'Tel-U BGD - Ruang Diskusi 01',
    'Tel-U BGD - Ruang Diskusi 02',
    'Tel-U BGD - Ruang Diskusi 04',
    'Tel-U BGD - Ruang Diskusi 05',
    'Tel-U BGD - Ruang Diskusi 08',
    'Tel-U BGD - Ruang Diskusi 09',
    'Tel-U BGD - Ruang Diskusi 11',
    'Tel-U BGD - Ruang Diskusi 12',
  ];

  // Fungsi untuk menghitung posisi dan durasi berdasarkan waktu
  const calculatePosition = (startTime, endTime) => {
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);

    const startInMinutes = startHour * 60 + startMinute; // Total menit dari awal hari
    const endInMinutes = endHour * 60 + endMinute;

    const gridColumnStart = Math.floor((startInMinutes - 480) / 30) + 2; // Kolom awal, mulai dari kolom kedua
    const gridColumnSpan = Math.ceil((endInMinutes - startInMinutes) / 30); // Durasi dalam kolom

    return { gridColumnStart, gridColumnSpan };
  };

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className='bg-gradient-to-b from-[#C12F2F] to-[#5A1818] text-white text-center py-6 px-6 sm:px-8'>
        <h1 className='text-2xl sm:text-3xl font-bold'>
          Reservasi Ruangan Open Library
        </h1>
      </header>

      {/* Filter Reservasi */}
      <div className='bg-white p-4'>
        <div className='max-w-7xl mx-auto flex flex-wrap items-center gap-4'>
          <button className='bg-red-700 text-white py-2 px-4 rounded-lg font-bold shadow hover:bg-red-800'>
            Pesan Ruangan
          </button>

          <div className='flex items-center gap-2'>
            <label htmlFor='lokasi' className='font-medium text-gray-700'>
              Pilih Lokasi Perpustakaan
            </label>
            <select
              id='lokasi'
              className='border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-red-700'
            >
              <option value='Tel-U'>Tel-U</option>
              <option value='Other'>Other</option>
            </select>
          </div>

          <div className='flex items-center gap-2'>
            <label htmlFor='tanggal' className='font-medium text-gray-700'>
              Pilih Tanggal
            </label>
            <input
              type='date'
              id='tanggal'
              className='border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-red-700'
            />
          </div>

          <button className='bg-blue-600 text-white py-2 px-4 rounded-lg font-bold shadow hover:bg-blue-700'>
            Search
          </button>
        </div>
      </div>

      {/* Kalender Reservasi */}
      <div className='bg-white p-4 sm:p-6'>
        <div className='max-w-7xl mx-auto overflow-x-auto'>
          <div
            className='grid grid-cols-19 auto-rows-min border border-gray-300'
            style={{
              gridTemplateColumns: `150px repeat(18, 1fr)`,
            }}
          >
            {/* Header */}
            <div className='bg-red-700 text-white px-4 py-2'></div>
            {Array.from({ length: 9 }, (_, i) => (
              <div
                key={i}
                className='bg-red-700 text-white text-center col-span-2'
              >
                {8 + i}:00
              </div>
            ))}

            {/* Rows */}
            {rooms.map((room, i) => (
              <React.Fragment key={i}>
                {/* Nama ruangan */}
                <div
                  className='bg-red-700 text-white px-4 py-4'
                  style={{ gridRow: `${i + 2} / span 1` }}
                >
                  {room}
                </div>

                {/* Kolom waktu */}
                {Array.from({ length: 18 }, (_, j) => (
                  <div
                    key={j}
                    className='bg-gray-100 border border-gray-300'
                  ></div>
                ))}

                {/* Reservations */}
                {reservations
                  .filter((r) => r.room === room)
                  .map((r, idx) => {
                    const { gridColumnStart, gridColumnSpan } =
                      calculatePosition(r.startTime, r.endTime);

                    return (
                      <div
                        key={idx}
                        className={`${r.color} text-white text-center px-2 py-1 rounded shadow`}
                        style={{
                          gridColumn: `${gridColumnStart} / span ${gridColumnSpan}`,
                          gridRow: `${i + 2} / span 1`,
                        }}
                      >
                        {`${r.startTime} - ${r.endTime} ${r.status}`}
                      </div>
                    );
                  })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ReservasiRuangan;
