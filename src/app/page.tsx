import Navbar from './components/navbar'
import Footer from './components/Footer'
import Slideshow from './components/SlideShow'

export default function Home() {
  return (
    <div className="bg-stone-900 text-white">
      <section
        id="home"
        className="relative h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/spartanbg1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply pointer-events-none" />

        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div className="p-10 rounded-xl shadow-[ -17px_17px_10px_rgba(0,0,0,0.5) ] max-w-3xl">
            <h1 className="text-5xl font-bold text-red-600 mb-4">SPARTAN COMMUNITY</h1>
            <p className="text-lg">
              Di ambil dari sebuah nama prajurit yang tak kenal lelah dan tak takut ajal, <br />
              <strong>SPARTAN</strong> adalah nama dari sebuah komunitas offroad di Banyuwangi yang berisi para prajurit dengan kuda besinya.
            </p>
          </div>
        </div>
      </section>

      <Slideshow />

      <section id="activities" className="py-20 bg-stone-900 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Activities</h2>
        <div className="flex flex-col gap-10">
          <div className="bg-stone-700 p-6 rounded-xl shadow-[ -17px_17px_10px_rgba(0,0,0,0.5) ] flex gap-6 items-center">
            <img src="/offroad.jpg" className="w-60 h-60 object-cover rounded shadow-[ -17px_17px_10px_rgba(0,0,0,0.5) ]" />
            <p>
              Offroad Event, Menjelajahi jalur ekstrem.
            </p>
          </div>
          <div className="bg-stone-700 p-6 rounded-xl shadow-[ -17px_17px_10px_rgba(0,0,0,0.5) ] flex gap-6 items-center">
            <img src="/event.jpg" className="w-60 h-60 object-cover rounded shadow-[ -17px_17px_10px_rgba(0,0,0,0.5) ]" />
            <p>
              Ulang tahun komunitas Spartan yang ke-5, dirayakan dengan meriah dan penuh kekeluargaan.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          <button className="w-4 h-4 bg-white rounded-full"></button>
          <button className="w-4 h-4 bg-gray-500 rounded-full"></button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
