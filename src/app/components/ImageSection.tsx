
const data = [
  { img: '/poster1.jpg', desc: 'Deskripsi gambar 1' },
  { img: '/poster2.jpg', desc: 'Deskripsi gambar 2' },
  { img: '/poster3.jpg', desc: 'Deskripsi gambar 3' },
]

export default function ImageSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-6">
      {data.map((item, idx) => (
        <div key={idx} className="text-center">
          <img src={item.img} alt={`Gambar ${idx + 1}`} className="w-full h-48 object-cover rounded-lg shadow-md" />
          <p className="mt-2 text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}
