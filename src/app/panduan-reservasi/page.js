'use client';

import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';

const PanduanReservasi = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className='relative'>
      <Sidebar topPosition='top-24' />

      <div className='bg-custom-red text-white min-h-screen'>
        <Navbar />

        <div className='max-w-5xl mx-auto bg-white p-8 rounded-md text-gray-800 shadow-lg mt-6'>
          <h1 className='text-2xl font-bold text-red-700 mb-6'>
            Panduan Reservasi Ruangan Open Library
          </h1>

          <p className='mb-4'>
            Selamat datang di Open Library Telkom University! Untuk mempermudah
            Anda dalam melakukan reservasi ruangan, kami telah menyediakan
            panduan berikut yang menjelaskan ketentuan dan prosedur peminjaman
            ruangan di Open Library. Pastikan untuk membaca dan mengikuti aturan
            yang berlaku agar pengalaman Anda dalam menggunakan fasilitas kami
            berjalan lancar.
          </p>

          {/* Dropdown 1 */}
          <div className='border-b border-gray-300 py-4'>
            <button
              onClick={() => toggleSection('ketentuanUmum')}
              className='w-full text-left font-bold text-lg flex justify-between items-center'
            >
              Ketentuan Umum Peminjaman Ruangan
              <span>{openSection === 'ketentuanUmum' ? '-' : '+'}</span>
            </button>
            {openSection === 'ketentuanUmum' && (
              <ul className='list-disc ml-6 mt-2 space-y-2'>
                <li>
                  <strong>Ruang Berbayar:</strong> Peminjaman ruang diskusi
                  dengan kapasitas lebih dari 10 orang akan dikenakan tarif
                  peminjaman.
                </li>
                <li>
                  <strong>Peminjaman oleh Dosen dan Pegawai:</strong> Tarif
                  berlaku sesuai ketentuan.
                </li>
                <li>
                  <strong>Peminjaman untuk Perkuliahan:</strong> Tidak ada tarif
                  peminjaman.
                </li>
                <li>
                  <strong>Batas Maksimal Peminjaman:</strong> Maksimal 2 kali
                  hingga admin memberikan approval atau reject.
                </li>
                <li>
                  <strong>Prosedur Pengambilan Kunci:</strong> Setelah admin
                  memberikan approval, anggota dapat mengambil kunci di bagian
                  sirkulasi.
                </li>
                <li>
                  <strong>Jaminan Identitas:</strong> Anggota harus menyerahkan
                  kartu identitas seperti KTM atau KTP sebagai jaminan.
                </li>
                <li>
                  <strong>Sanksi Blacklist:</strong> Jika anggota tidak
                  mengambil kunci sebanyak 2 kali setelah approval, mereka akan
                  diblokir hingga bulan berikutnya.
                </li>
              </ul>
            )}
          </div>

          {/* Dropdown 2 */}
          <div className='border-b border-gray-300 py-4'>
            <button
              onClick={() => toggleSection('pengambilanKunci')}
              className='w-full text-left font-bold text-lg flex justify-between items-center'
            >
              Ketentuan Pengambilan Kunci Berdasarkan Durasi
              <span>{openSection === 'pengambilanKunci' ? '-' : '+'}</span>
            </button>
            {openSection === 'pengambilanKunci' && (
              <ul className='list-disc ml-6 mt-2 space-y-2'>
                <li>
                  <strong>Durasi 30 Menit:</strong> Kunci diambil 15 menit
                  setelah jam awal pemesanan.
                </li>
                <li>
                  <strong>Durasi 60 Menit:</strong> Kunci diambil 30 menit
                  setelah jam awal pemesanan.
                </li>
                <li>
                  <strong>Durasi 90-120 Menit:</strong> Kunci diambil 60 menit
                  setelah jam awal pemesanan.
                </li>
              </ul>
            )}
          </div>

          {/* Dropdown 3 */}
          <div className='border-b border-gray-300 py-4'>
            <button
              onClick={() => toggleSection('langkahReservasi')}
              className='w-full text-left font-bold text-lg flex justify-between items-center'
            >
              Langkah-langkah Reservasi Ruangan
              <span>{openSection === 'langkahReservasi' ? '-' : '+'}</span>
            </button>
            {openSection === 'langkahReservasi' && (
              <ol className='list-decimal ml-6 mt-2 space-y-2'>
                <li>Login ke Sistem Reservasi di website Open Library.</li>
                <li>Pilih Ruangan dan Durasi sesuai kebutuhan.</li>
                <li>Isi Formulir Peminjaman dengan data yang lengkap.</li>
                <li>Tunggu Proses Approval dari admin.</li>
                <li>Ambil Kunci di bagian sirkulasi setelah disetujui.</li>
                <li>Kembalikan Kunci setelah penggunaan selesai.</li>
              </ol>
            )}
          </div>

          {/* Dropdown 4 */}
          <div className='border-b border-gray-300 py-4'>
            <button
              onClick={() => toggleSection('pentingDiperhatikan')}
              className='w-full text-left font-bold text-lg flex justify-between items-center'
            >
              Penting untuk Diperhatikan
              <span>{openSection === 'pentingDiperhatikan' ? '-' : '+'}</span>
            </button>
            {openSection === 'pentingDiperhatikan' && (
              <p className='mt-2'>
                Pemesanan ruangan harus dilakukan dengan mempertimbangkan waktu
                pengambilan kunci. Pastikan Anda mematuhi waktu yang disepakati.
                Jika tidak dapat mengambil kunci sesuai jadwal, segera beri tahu
                admin untuk pengaturan ulang.
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PanduanReservasi;
