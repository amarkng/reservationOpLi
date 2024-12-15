'use client';

import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import ModalDetailReservasi from '../components/modal/ModalDetailReservasi';
import ModalPesanRuangan from '../components/modal/ModalPesanRuangan';
import ModalDetailRuangan from '../components/modal/ModalDetailRuangan';

const ReservasiRuangan = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [isPesanModalOpen, setPesanModalOpen] = useState(false);
  const [isRoomModalOpen, setRoomModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const openPesanModal = () => {
    setPesanModalOpen(true);
  };

  const closePesanModal = () => {
    setPesanModalOpen(false);
  };

  const openModal = (reservation) => {
    setSelectedReservation(reservation);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedReservation(null);
  };

  const openRoomModal = (room) => {
    setSelectedRoom(room);
    setRoomModalOpen(true);
  };

  const closeRoomModal = () => {
    setRoomModalOpen(false);
    setSelectedRoom(null);
  };

  const reservations = [
    {
      room: 'Tel-U BGD - Mini Studio',
      startTime: '08:30',
      endTime: '09:30',
      status: 'Attend',
      color: 'bg-green-400',
      name: 'FATIH MUTROVIN',
      date: '17 Desember 2024',
      members: [
        'fatihmutrovin - FATIH MUTROVIN',
        'yangyang - YANG YANG',
        'muhshevaaditya - MUHAMMAD SHEVA ADYTHIA',
      ],
      purpose: 'Membuat video assessment',
    },
    {
      room: 'Tel-U BGD - Mini Studio',
      startTime: '09:30',
      endTime: '11:00',
      status: 'Approved',
      color: 'bg-blue-400',
      name: 'John Doe',
      date: '17 Desember 2024',
      members: ['John Doe', 'Jane Doe'],
      purpose: 'Meeting tim project',
    },
    {
      room: 'Tel-U BGD - Ruang Diskusi 02',
      startTime: '11:00',
      endTime: '12:30',
      status: 'Request',
      color: 'bg-yellow-400',
      name: 'Cu pat Kai',
      date: '17 Desember 2024',
      members: ['Cu pat Kai', 'Sun wukong', 'Budi'],
      purpose: 'Mengerjakan Tugas',
    },
    {
      room: 'Tel-U BGD - Ruang Diskusi 05',
      startTime: '13:00',
      endTime: '14:30',
      status: 'Approved',
      color: 'bg-blue-400',
      name: 'Cu pat Kai',
      date: '17 Desember 2024',
      members: ['Cu pat Kai', 'Sun wukong', 'Budi'],
      purpose: 'Mengerjakan Tugas',
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

  const roomsData = {
    'Tel-U BGD - Mini Studio': {
      image: '/detailRuangan.png',
      fasilitas: [
        'TV Digital',
        'Stereo Speaker',
        'Sofa',
        'Kursi',
        'Meja',
        'Rak Penyimpanan',
      ],
      ketersediaan: [
        { status: 'reserved', time: '08:00 - 10:00' },
        { status: 'available', time: '10:00 - 11:00' },
        { status: 'reserved', time: '11:00 - 14:00' },
        { status: 'available', time: '14:00 - 16:00' },
      ],
    },
    'Tel-U BGD - Mini Theater': {
      image: '/detailRuangan.png',
      fasilitas: ['Proyektor', 'Sound System', 'AC', 'Kursi 20', 'Layar Besar'],
      ketersediaan: [
        { status: 'available', time: '08:00 - 12:00' },
        { status: 'reserved', time: '12:00 - 15:00' },
      ],
    },
    'Tel-U BGD - Open Discussion Room': {
      image: '/detailRuangan.png',
      fasilitas: ['Papan Tulis', 'Kursi 10', 'Meja Besar', 'AC'],
      ketersediaan: [
        { status: 'available', time: '08:00 - 09:00' },
        { status: 'reserved', time: '09:00 - 12:00' },
        { status: 'available', time: '12:00 - 16:00' },
      ],
    },
    'Tel-U BGD - Ruang Diskusi 01': {
      image: '/detailRuangan.png',
      fasilitas: ['Kursi 6', 'Meja', 'Papan Tulis'],
      ketersediaan: [
        { status: 'reserved', time: '08:00 - 10:00' },
        { status: 'available', time: '10:00 - 12:00' },
        { status: 'reserved', time: '12:00 - 15:00' },
      ],
    },
    'Tel-U BGD - Ruang Diskusi 02': {
      image: '/detailRuangan.png',
      fasilitas: ['Kursi 8', 'Meja Besar', 'AC'],
      ketersediaan: [
        { status: 'available', time: '08:00 - 10:00' },
        { status: 'reserved', time: '10:00 - 14:00' },
        { status: 'available', time: '14:00 - 16:00' },
      ],
    },
    'Tel-U BGD - Ruang Diskusi 04': {
      image: '/detailRuangan.png',
      fasilitas: ['Kursi 4', 'Meja', 'Lampu Terang'],
      ketersediaan: [
        { status: 'reserved', time: '08:00 - 12:00' },
        { status: 'available', time: '12:00 - 16:00' },
      ],
    },
    'Tel-U BGD - Ruang Diskusi 05': {
      image: '/detailRuangan.png',
      fasilitas: ['Kursi 10', 'Meja Besar', 'Papan Tulis', 'AC'],
      ketersediaan: [
        { status: 'available', time: '08:00 - 09:30' },
        { status: 'reserved', time: '09:30 - 12:00' },
        { status: 'available', time: '12:00 - 15:00' },
      ],
    },
    'Tel-U BGD - Ruang Diskusi 08': {
      image: '/detailRuangan.png',
      fasilitas: ['Kursi 6', 'Meja', 'Proyektor Mini'],
      ketersediaan: [
        { status: 'reserved', time: '08:00 - 11:00' },
        { status: 'available', time: '11:00 - 13:00' },
        { status: 'reserved', time: '13:00 - 16:00' },
      ],
    },
    'Tel-U BGD - Ruang Diskusi 09': {
      image: '/detailRuangan.png',
      fasilitas: ['Kursi 8', 'Meja', 'Whiteboard'],
      ketersediaan: [
        { status: 'available', time: '08:00 - 09:00' },
        { status: 'reserved', time: '09:00 - 14:00' },
        { status: 'available', time: '14:00 - 16:00' },
      ],
    },
    'Tel-U BGD - Ruang Diskusi 11': {
      image: '/detailRuangan.png',
      fasilitas: ['Kursi 10', 'Meja Besar', 'Wi-Fi', 'Lampu Terang'],
      ketersediaan: [
        { status: 'reserved', time: '08:00 - 10:00' },
        { status: 'available', time: '10:00 - 13:00' },
        { status: 'reserved', time: '13:00 - 16:00' },
      ],
    },
    'Tel-U BGD - Ruang Diskusi 12': {
      image: '/detailRuangan.png',
      fasilitas: ['Kursi 12', 'Meja', 'Wi-Fi', 'AC'],
      ketersediaan: [
        { status: 'available', time: '08:00 - 11:00' },
        { status: 'reserved', time: '11:00 - 14:00' },
        { status: 'available', time: '14:00 - 16:00' },
      ],
    },
  };

  const calculatePosition = (startTime, endTime) => {
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);
    const startInMinutes = startHour * 60 + startMinute;
    const endInMinutes = endHour * 60 + endMinute;

    const gridColumnStart = Math.floor((startInMinutes - 480) / 30) + 2;
    const gridColumnSpan = Math.ceil((endInMinutes - startInMinutes) / 30);

    return { gridColumnStart, gridColumnSpan };
  };

  return (
    <div className='flex flex-col min-h-screen relative'>
      <Sidebar topPosition='top-36' />
      <Navbar />
      <header className='bg-custom-red text-white text-center py-2 px-6 sm:px-8'>
        <h1 className='text-2xl sm:text-3xl font-bold'>
          Reservasi Ruangan Open Library
        </h1>
      </header>
      <div className='bg-white p-4'>
        <div className='max-w-7xl mx-auto flex flex-wrap items-center gap-4  '>
          <button
            onClick={openPesanModal}
            className='bg-red-700 text-white mt-4 py-2 px-4 rounded-lg font-bold shadow hover:bg-red-800'
          >
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
      <div className='bg-white p-4 sm:p-6'>
        <div className='max-w-7xl mx-auto overflow-x-auto'>
          <div
            className='grid grid-cols-19 auto-rows-min border border-gray-300 min-w-[1000px]'
            style={{
              gridTemplateColumns: `150px repeat(18, 1fr)`,
            }}
          >
            {/* Header Waktu */}
            <div className='bg-red-700 text-white px-4 py-2'></div>
            {Array.from({ length: 9 }, (_, i) => (
              <div
                key={i}
                className='bg-red-700 text-white text-center col-span-2 text-xs sm:text-sm'
              >
                {8 + i}:00
              </div>
            ))}

            {/* Baris Ruangan */}
            {rooms.map((room, i) => (
              <React.Fragment key={i}>
                <div
                  className='bg-red-700 text-white px-4 py-4 cursor-pointer hover:bg-red-600 text-xs sm:text-sm'
                  style={{ gridRow: `${i + 2} / span 1` }}
                  onClick={() => openRoomModal(room)}
                >
                  {room}
                </div>

                {/* Grid Kolom */}
                {Array.from({ length: 18 }, (_, j) => (
                  <div
                    key={j}
                    className='bg-gray-100 border border-gray-300'
                  ></div>
                ))}

                {/* Reservasi */}
                {reservations
                  .filter((r) => r.room === room)
                  .map((r, idx) => {
                    const { gridColumnStart, gridColumnSpan } =
                      calculatePosition(r.startTime, r.endTime);

                    return (
                      <div
                        key={idx}
                        className={`${r.color} text-white text-center px-2 py-1 rounded shadow cursor-pointer text-xs sm:text-sm`}
                        style={{
                          gridColumn: `${gridColumnStart} / span ${gridColumnSpan}`,
                          gridRow: `${i + 2} / span 1`,
                        }}
                        onClick={() => openModal(r)}
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

      <Footer />

      {isModalOpen && (
        <ModalDetailReservasi
          isOpen={isModalOpen}
          onClose={closeModal}
          reservation={selectedReservation}
        />
      )}
      <ModalPesanRuangan
        isOpen={isPesanModalOpen}
        onClose={closePesanModal}
        rooms={rooms}
      />
      <ModalDetailRuangan
        isOpen={isRoomModalOpen}
        onClose={closeRoomModal}
        room={{ name: selectedRoom, ...roomsData[selectedRoom] }}
      />
    </div>
  );
};

export default ReservasiRuangan;
