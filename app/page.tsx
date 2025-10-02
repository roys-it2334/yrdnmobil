export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-green-800 text-gray-100">
      <main className="flex flex-col gap-10 items-center sm:items-start p-10">
        <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-md text-green-400">
          🚙 Galeri Mobil Yordan 
        </h1>
        <p className="text-gray-300 text-center sm:text-left max-w-2xl leading-relaxed">
          Selamat datang di <span className="font-semibold text-green-300">galeri mobil Yordan</span>.  
          Jelajahi koleksi mobil offroad terbaik yang dirancang untuk menaklukkan segala medan!
        </p>

  {/* 🆕 Perkenalan Diri */}
  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-2xl text-center sm:text-left">
    <h2 className="text-2xl font-bold text-green-300 mb-2">Halo, saya Mochamad Yordan Pratama 👋</h2>
    <p className="text-gray-300 leading-relaxed">
      Selamat datang di website pertama saya! Ini adalah project sederhana yang saya buat untuk menampilkan galeri mobil offroad favorit saya. Terima kasih sudah berkunjung dan semoga suka dengan tampilannya! 🚗💨
    </p>
  </div>

        {/* Mobil Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
          {/* Mobil 1 */}
          <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-green-500/40 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-gray-700">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.Ocx-rZmTAL0i6WH6sBu9CwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Jeep Wrangler"
              className="rounded-lg object-cover w-[400px] h-[250px]"
            />
            <h2 className="mt-4 text-xl font-bold text-white">Jeep Wrangler</h2>
            <p className="text-gray-400 text-sm">💪 Kuat, tangguh, dan siap menembus medan ekstrem.</p>
          </div>

          {/* Mobil 2 */}
          <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-yellow-400/40 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-gray-700">
            <img
              src="https://superlive.id/storage/superadventure/2017/06/29/93396ff0508e.jpg"
              alt="Land Rover Defender"
              className="rounded-lg object-cover w-[400px] h-[250px]"
            />
            <h2 className="mt-4 text-xl font-bold text-white">Land Rover Defender</h2>
            <p className="text-gray-400 text-sm">🌍 Siap jelajah dunia tanpa batas, klasik dan modern sekaligus.</p>
          </div>

          {/* Mobil 3 */}
          <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-blue-400/40 transition duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center border border-gray-700">
            <img
              src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/12/10/4933446/4933446_b46a314e-774b-4d9c-ae0f-6d0f7e7a541c.jpg"
              alt="Toyota Land Cruiser"
              className="rounded-lg object-cover w-[400px] h-[250px]"
            />
            <h2 className="mt-4 text-xl font-bold text-white">Toyota Land Cruiser</h2>
            <p className="text-gray-400 text-sm">🚗 Legendaris di dunia offroad, nyaman di segala kondisi.</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-950 text-gray-400 py-4 flex justify-center border-t border-gray-700">
        <p className="text-sm">
          © 2025 <span className="text-green-400 font-semibold">Toko Mobil Yordan</span> - Semua hak dilindungi 🚙
        </p>
      </footer>
    </div>
  );
}
