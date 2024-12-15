import React, { useEffect, useRef } from 'react';

const ModalDetailRuangan = ({ isOpen, onClose, room }) => {
  const modalRef = useRef();

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  if (!isOpen || !room) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div
        ref={modalRef}
        className='bg-white rounded-lg p-6 w-full max-w-2xl text-black relative'
      >
        {/* Header */}
        <div className='flex justify-between items-center border-b pb-2 mb-4'>
          <h2 className='text-xl font-bold'>
            {room?.name || 'Detail Ruangan'}
          </h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-red-500 text-2xl'
          >
            &times;
          </button>
        </div>

        <div className='mb-4'>
          <img
            src={room?.image || '/placeholder-image.png'}
            alt={room?.name || 'Room Image'}
            className='w-full h-64 object-cover rounded'
          />
        </div>

        <div>
          <p className='font-bold'>Fasilitas:</p>
          <ul className='list-disc pl-5'>
            {room?.fasilitas?.length > 0 ? (
              room.fasilitas.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <p>Fasilitas tidak tersedia</p>
            )}
          </ul>
        </div>

        <div className='mt-4'>
          <p className='font-bold'>Ketersediaan:</p>
          {room?.ketersediaan?.length > 0 ? (
            <div className='flex gap-2 flex-wrap'>
              {room.ketersediaan.map((slot, index) => (
                <div
                  key={index}
                  className={`px-3 py-1 rounded text-white ${
                    slot.status === 'reserved' ? 'bg-red-500' : 'bg-green-500'
                  }`}
                >
                  {slot.status === 'reserved' ? 'reserved' : 'tersedia'}:{' '}
                  {slot.time}
                </div>
              ))}
            </div>
          ) : (
            <p>Tidak ada data ketersediaan</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalDetailRuangan;
