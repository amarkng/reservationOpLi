'use client';

import React, { useRef, useEffect } from 'react';

const ModalDetailReservasi = ({ isOpen, onClose, reservation }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen || !reservation) return null;

  const statusColors = {
    Attend: 'bg-green-400',
    Request: 'bg-yellow-400',
    Approved: 'bg-sky-400',
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div
        ref={modalRef}
        className='bg-white rounded-lg shadow-lg w-11/12 max-w-md'
      >
        {/* Header */}
        <div className='bg-red-700 text-white px-4 py-2 flex justify-between items-center'>
          <h2 className='font-bold'>
            {reservation.date || '08 Desember 2024'} {reservation.startTime} -{' '}
            {reservation.endTime}
          </h2>
          <button onClick={onClose} className='text-white text-lg font-bold'>
            &times;
          </button>
        </div>

        {/* Content */}
        <div className='p-4 text-black'>
          <p className='font-bold'>
            Nama:{' '}
            <span className='font-normal'>
              {reservation.name || 'Tidak Ada Nama'}
            </span>
          </p>
          <p className='font-bold flex items-center'>
            Status:{' '}
            <span
              className={`ml-2 px-2 py-1 rounded text-white ${
                statusColors[reservation.status] || 'bg-gray-400'
              }`}
            >
              {reservation.status}
            </span>
          </p>
          <p className='font-bold mt-2'>Nama Anggota:</p>
          <ul className='list-decimal list-inside ml-4'>
            {reservation.members.map((member, idx) => (
              <li key={idx}>{member}</li>
            ))}
          </ul>
          <p className='font-bold mt-2'>
            Tujuan: <span className='font-normal'>{reservation.purpose}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalDetailReservasi;
