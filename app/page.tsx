export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <main className="flex flex-col gap-10 items-center sm:items-start p-10">
        <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-md text-red-500">
          🚘 Galeri Mobil Galih 
        </h1>
        <p className="text-gray-300 text-center sm:text-left max-w-2xl leading-relaxed">
          Selamat datang di <span className="font-semibold text-red-400">galeri mobil Galih</span>.  
          Pilih mobil impianmu dengan <span className="text-yellow-400">gaya</span>, kecepatan, dan kenyamanan terbaik.
        </p>

        {/* Mobil Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
          {/* Mobil 1 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-red-500/40 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-gray-700">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.unMhzS3oo2NpAVmtjfFpEwHaE3?pid=Api&P=0&h=220"
              alt="evolution 9"
              className="rounded-lg object-cover w-[400px] h-[250px]"
            />
            <h2 className="mt-4 text-xl font-bold text-white">Evolution 9</h2>
            <p className="text-gray-400 text-sm">⚡ Cepat dengan desain elegan.</p>
          </div>

          {/* Mobil 2 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-yellow-400/40 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-gray-700">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.Vv4dAdepNzWEcAt8J787hwHaEF?pid=Api&P=0&h=220"
              alt="city z"
              className="rounded-lg object-cover w-[400px] h-[250px]"
            />
            <h2 className="mt-4 text-xl font-bold text-white">City Z</h2>
            <p className="text-gray-400 text-sm">✨ Nyaman, stylish, dan cocok buat nongki.</p>
          </div>

          {/* Mobil 3 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-blue-400/40 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-gray-700">
            <img
              src="https://nmaa.co.id/wp-content/uploads/2022/01/Honda-Accord-Ferio-1997-Reinaldi-BDG-4-e1642911829158.jpg"
              alt="civic ferio"
              className="rounded-lg object-cover w-[400px] h-[250px]"
            />
            <h2 className="mt-4 text-xl font-bold text-white">Civic Ferio</h2>
            <p className="text-gray-400 text-sm">🔥 Ikonik, nyaman, dan kesukaan ciwi".</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-950 text-gray-400 py-4 flex justify-center border-t border-gray-700">
        <p className="text-sm">
          © 2025 <span className="text-red-400 font-semibold">Toko Mobil Galih</span> - Semua hak dilindungi 🚘
        </p>
      </footer>
    </div>
  );
}