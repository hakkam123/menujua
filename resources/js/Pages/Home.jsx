import React from "react";
import Head from "next/head"; // Import the Head component from Next.js

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>NFZ</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-white text-gray-800">
        <header className="bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="text-blue-700 font-bold text-xl">NFZ</div>
            <nav className="space-x-6">
              <a className="text-gray-700 hover:text-blue-700" href="#">
                Beranda
              </a>
              <a className="text-gray-700 hover:text-blue-700" href="#">
                Produk
              </a>
              <a className="text-gray-700 hover:text-blue-700" href="#">
                Tentang Kami
              </a>
            </nav>
          </div>
        </header>

        <section className="relative">
          <img
            alt="Frozen food packages in a freezer"
            className="w-full h-96 object-cover"
            height="600"
            src="https://storage.googleapis.com/a1aa/image/3QxP-zLc6TpkKjiC-G4WoSZYcc0OC0bHOe7R6gO8LEk.jpg"
            width="1920"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl font-bold">
              Menyediakan segala kebutuhan kulkas anda.
            </h1>
            <button className="mt-4 bg-blue-700 text-white py-2 px-6 rounded-full">
              Lihat semua
            </button>
          </div>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800">With our Services</h2>
          <p className="text-xl text-gray-600 mt-2">Innovate in your rescuing operations</p>
          <div className="mt-8 flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-4xl text-pink-500 mb-2">
                <i className="fas fa-truck"></i>
              </div>
              <h3 className="text-lg font-semibold">Antar ke rumahmu</h3>
              <p className="text-gray-600">
                temukan distributor yang terverifikasi di dekat anda
                <span className="text-red-500"> atau </span>jadilah distributor!
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-pink-500 mb-2">
                <i className="fas fa-comments"></i>
              </div>
              <h3 className="text-lg font-semibold">24/7 Respon chat</h3>
              <p className="text-gray-600">
                temukan distributor yang terverifikasi di dekat anda
                <span className="text-red-500"> atau </span>jadilah distributor!
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-pink-500 mb-2">
                <i className="fas fa-tags"></i>
              </div>
              <h3 className="text-lg font-semibold">Harga terjangkau</h3>
              <p className="text-gray-600">
                temukan distributor yang terverifikasi di dekat anda
                <span className="text-red-500"> atau </span>jadilah distributor!
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-700 py-16">
          <div className="container mx-auto text-center text-white">
            <h2 className="text-2xl font-bold">Kami menyediakan berbagai produk</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Product Cards */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  alt="Fried food"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="https://storage.googleapis.com/a1aa/image/AN4_tf5bIzn3v49Z5WLoZtf6C_nn91w_anUKxzx_LAk.jpg"
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">Fried Food - 10K</h3>
                </div>
              </div>
              {/* Repeat for other products */}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">Ayo Kunjungi Kami !</h2>
              <p className="text-gray-600 mt-4">
                Melalui sistem monitoring real-time dan dukungan data berbasis AI, kami membantu Anda menghindari risiko dan menjaga keselamatan di setiap kondisi darurat.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <img
                alt="Map showing location in Melbourne"
                className="rounded-lg shadow-lg"
                height="300"
                src="https://storage.googleapis.com/a1aa/image/WrWFMOYDNe3Gr0VPGJDMMH7aAYrGpj-xzm-on5qKSLY.jpg"
                width="400"
              />
            </div>
          </div>
        </section>

        <footer className="bg-gray-100 py-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-blue-700">NFZ</h3>
              <p className="text-gray-600">Nurul Frozen Food</p>
            </div>
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-gray-800">Services</h4>
              <ul className="text-gray-600">
                <li>Delivery</li>
                <li>Response</li>
                <li>Prices</li>
              </ul>
            </div>
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-gray-800">Contact & Address</h4>
              <p className="text-gray-600">nurulfrozen@gmail.com</p>
              <p className="text-gray-600">+62 888 2222 00000</p>
              <p className="text-gray-600">Kota Bogor, Bogor, Jawa Barat</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-gray-800">Available On</h4>
              <div className="flex justify-center md:justify-start space-x-4 text-gray-600">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
