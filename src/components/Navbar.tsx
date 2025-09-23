import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 border-b border-gray-300">
      {/* Left side - Page Name */}
      <Link href="/"  className="text-xl font-bold text-white">Hello Next</Link>

      {/* Right side - Nav Links */}
      <div className="space-x-4">
        <Link href="/" className="text-white hover:text-gray-200">Home</Link>
        <Link href="/about" className="text-white hover:text-gray-200">About</Link>
        <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
