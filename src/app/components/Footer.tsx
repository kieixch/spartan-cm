export default function Footer() {
  return (
    <footer className="bg-red-950 text-white py-10 px-6 mt-20">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <button className="bg-white text-black px-4 py-2 rounded-md">Join Us</button>
        </div>
        <div>
          <button className="bg-white text-black px-4 py-2 rounded-md">More</button>
        </div>
        <div className="flex gap-4 text-xl">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
      <p className="text-center mt-4 text-sm opacity-60">© 2025 Spartan</p>
    </footer>
  );
}
