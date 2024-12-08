  <Link href="/account" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
      </svg>
      <span className="text-sm">MYAccount</span>
    </Link>;
import React from "react";
import Link from "next/link";
import {
  UserIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="bg-[#FBEBB5] border-b border-gray-300 p-4 flex justify-between items-center px-10">
      {/* Logo or Placeholder */}
      <div className="flex items-center">
     <Link href="/Account" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
      </svg>
      <span className="text-sm">MYAccount</span>
    </Link>

      </div>

      {/* Centered Navbar Links */}
      <div className="flex-grow flex justify-center">
        <ul className="flex space-x-8 font-bold">
          <li>
            <Link
              href="/Home"
              className="block py-2 px-3 text-black hover:underline hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Shop"
              className="block py-2 px-3 text-black hover:underline hover:text-blue-500"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/Blog"
              className="block py-2 px-3 text-black hover:underline hover:text-blue-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="block py-2 px-3 text-black hover:underline hover:text-blue-500"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

     {/* Navbar Icons */}
<div className="flex items-center space-x-6">
  <Link href="/CartSideBar" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
    <UserIcon className="h-6 w-6" />
    <span className="text-sm">CartSideBar</span>
  </Link>
  <Link href="/SingleProduct" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
    <MagnifyingGlassIcon className="h-6 w-6" />
    <span className="text-sm">SingleProduct</span>
  </Link>
  <Link href="/CheckOut" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
    <HeartIcon className="h-6 w-6" />
    <span className="text-sm">CheckOut</span>
  </Link>
  <Link href="/Cart" className="flex flex-col items-center text-gray-500 hover:text-blue-500">
    <ShoppingCartIcon className="h-6 w-6" />
    <span className="text-sm">Cart</span>
  </Link>
</div>

    </nav>
  );
};

export default Navbar;
