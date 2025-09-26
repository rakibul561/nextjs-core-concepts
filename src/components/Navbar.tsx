"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathname = usePathname();
  console.log(pathname)


  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 border-b border-gray-300">
      {/* Left side - Page Name */}
      <Link href="/"  className="text-xl font-bold text-white">Hello Next</Link>

      {/* Right side - Nav Links */}
      <div className="space-x-4">
        <Link href="/" className="text-white hover:text-gray-200">Home</Link>


        <Link href="/gellary" 
        className= {`${pathname === '/gellary'?"text-red-500 font-semibold underline":"hover:underline text-white"}`}>
          Gellary
          </Link>

        <Link href="/products" className={`${pathname === '/products'?"text-red-500 font-semibold underline":"hover:underline text-white"}`}>Products</Link>

        <Link href="/about" className={`${pathname === '/about'?"text-red-500 font-semibold underline":"hover:underline text-white"}`}>About</Link>
        <Link href="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
        <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
