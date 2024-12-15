import React, { useState, useRef, useEffect } from 'react';

const ModalPesanRuangan = ({ isOpen, onClose, rooms }) => {
  const [formData, setFormData] = useState({
    room: '',
    phone: '',
    date: '',
    startTime: '',
    duration: '',
    purpose: '',
    members: [],
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const modalRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

    setSuccessMessage('Pemesanan ruangan berhasil!');
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {isSuccess && (
        <div className='fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50'>
          {successMessage}
        </div>
      )}

      {/* Modal */}
      <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
        <div
          ref={modalRef}
          className='bg-white rounded-lg p-6 w-full max-w-2xl text-black'
        >
          <div className='flex justify-between items-center border-b pb-2 mb-4'>
            <h2 className='text-xl font-bold'>Pesan Ruangan</h2>
            <button
              onClick={onClose}
              className='text-gray-500 hover:text-red-500'
            >
              &times;
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Nama Ruangan */}
            <div className='mb-4'>
              <label className='block font-medium'>Nama Ruangan</label>
              <select
                name='room'
                value={formData.room}
                onChange={handleChange}
                className='w-full border rounded px-4 py-2'
                required
              >
                <option value=''>Pilih Ruangan</option>
                {rooms.map((room, index) => (
                  <option key={index} value={room}>
                    {room}
                  </option>
                ))}
              </select>
            </div>

            {/* No HP */}
            <div className='mb-4'>
              <label className='block font-medium'>No. HP</label>
              <input
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='w-full border rounded px-4 py-2'
                required
              />
            </div>

            {/* Tanggal */}
            <div className='mb-4'>
              <label className='block font-medium'>Tanggal</label>
              <input
                type='date'
                name='date'
                value={formData.date}
                onChange={handleChange}
                className='w-full border rounded px-4 py-2'
                required
              />
            </div>

            {/* Jam Mulai */}
            <div className='mb-4'>
              <label className='block font-medium'>Jam Mulai</label>
              <input
                type='time'
                name='startTime'
                value={formData.startTime}
                onChange={handleChange}
                className='w-full border rounded px-4 py-2'
                required
              />
            </div>

            {/* Durasi */}
            <div className='mb-4'>
              <label className='block font-medium'>Durasi</label>
              <select
                name='duration'
                value={formData.duration}
                onChange={handleChange}
                className='w-full border rounded px-4 py-2'
                required
              >
                <option value='30'>30 Menit</option>
                <option value='60'>60 Menit</option>
                <option value='90'>90 Menit</option>
              </select>
            </div>

            {/* Tujuan */}
            <div className='mb-4'>
              <label className='block font-medium'>Tujuan</label>
              <textarea
                name='purpose'
                value={formData.purpose}
                onChange={handleChange}
                className='w-full border rounded px-4 py-2'
                rows='3'
                required
              ></textarea>
            </div>

            {/* Nama Anggota */}
            <div className='mb-4'>
              <label className='block font-medium'>Nama Anggota</label>
              <input
                type='text'
                placeholder='Pisahkan dengan koma'
                name='members'
                value={formData.members.join(', ')}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    members: e.target.value.split(','),
                  })
                }
                className='w-full border rounded px-4 py-2'
                required
              />
            </div>

            <div className='flex justify-end gap-4'>
              <button
                type='button'
                onClick={onClose}
                className='bg-red-500 text-white px-4 py-2 rounded'
              >
                Batal
              </button>
              <button
                type='submit'
                className='bg-blue-500 text-white px-4 py-2 rounded'
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalPesanRuangan;
