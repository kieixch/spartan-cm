import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <a href="#" className="text-gray-600 hover:text-red-600">Home</a>
        </div>
        <div className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-red-600">Menu</a>
        <a href="#" className="text-gray-600 hover:text-red-600">Sign Up</a>
      </div>
    </nav>
  );
}
