
import Slideshow from './components/SlideShow'
import ImageSection from './components/ImageSection'
import Title from './components/Title'

export default function Home() {
  return (
    <div>
    <main className="pt-15">
      <Title/>
      <section id="konten" className="px-6 py-20 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Kegiatan Komunitas</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Spartan Community sering mengadakan offroad di medan ekstrim dan membantu kegiatan sosial di Banyuwangi.
        </p>
      </section>s
      <Slideshow />
      <ImageSection />
      </main> 
    </div>
  )
}
