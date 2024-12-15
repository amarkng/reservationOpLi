const Footer = () => {
  return (
    <footer className='bg-white py-10 px-6'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-800'>
        {/* Kolom 1 */}
        <div>
          <h3 className='text-lg font-bold mb-2'>
            Open Library Telkom University
          </h3>
          <p className='text-sm'>
            library@telkomuniversity.ac.id; <br />
            bebas pustaka: bebaspustaka@telkomuniversity.ac.id
          </p>
          <p className='text-sm mt-4'>
            Tel-U Gedung Manterawu Lantai 5
            <br />
            Jl. Telekomunikasi - Ters. Buah Batu
            <br />
            Bandung 40257 Indonesia
          </p>
        </div>

        {/* Kolom 2 */}
        <div>
          <p className='font-bold text-sm mb-2'>Waktu Operasional</p>
          <p className='text-sm'>Senin - Jumat</p>
          <p className='text-sm'>08:00 - 19:30</p>
        </div>

        {/* Kolom 3 */}
        <div>
          <p className='font-bold text-sm mb-2'>No Kontak</p>
          <p className='text-sm'>081280000110</p>
          <p className='text-sm'>+6222 756 5929</p>
        </div>

        {/* Kolom 4 */}
        <div className='flex justify-center items-center'>
          <img
            src='/logoTelkom.png'
            alt='Telkom Logo'
            className='w-16 xl:w-32'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
