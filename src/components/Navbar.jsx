
import React, { useState } from "react";
import { MdOutlineStarRate } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { GiGalaxy } from "react-icons/gi";
import { Link } from "react-router";

const Navbar = () => {
  // useState babohar korsi akta chalu korla arakta bondo hoba
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }






  return (
    <nav className="bg-blue-600 text-white py-4 md:py-6 sticky top-0 z-10">
      <div className=" container mx-auto flex justify-between items-center">
        <h3 className="text-5xl md:text-5xl text-red-600">
          <GiGalaxy />
        </h3>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {/* button a click korar por akta logor bodola arakta logo asba */}
          <button onClick={toggleMenu}>
            {
              isOpen ? <IoMdClose /> : <MdOutlineStarRate />
            }
          </button>
        </div>

        <ul className="hidden md:flex space-x-4 md:space-x-6">
          <li> <Link to={'/'} className="hover:text-gray-800" >Home</Link> </li>
          <li> <Link to={'products'} className="hover:text-gray-800">Products</Link> </li>
          <li> <Link to={'blogs'} className="hover:text-gray-800">Blogs</Link> </li>
          <li> <Link to={'contact'} className="hover:text-gray-800">Contact</Link> </li>
          <li> <Link to={'about'} className="hover:text-gray-800">About</Link> </li>
        </ul>

        <button className="hidden md:block text-white bg-gray-600  hover:bg-gray-700 px-4 py-1 cursor-pointer rounded">Loing</button>

        {/* Mobile menu collapsed */}
        <div className={`md:hidden w-full absolute bg-blue-500 top-full  ${isOpen ? 'block' : 'hidden'}`}>
          <ul className=" flex flex-col items-center py-2 left-0 w-full">
            <li> <Link to={'/'} className="hover:text-gray-800" >Home</Link> </li>
            <li> <Link to={'products'} className="hover:text-gray-800">Products</Link> </li>
            <li> <Link to={'blogs'} className="hover:text-gray-800">Blogs</Link> </li>
            <li> <Link to={'contact'} className="hover:text-gray-800">Contact</Link> </li>
            <li> <Link to={'about'} className="hover:text-gray-800">About</Link> </li>
            <li>
              <button className=" hover:text-gray-800">Login</button>
            </li>
          </ul>  
        </div>


      </div>
    </nav>




  );
};

export default Navbar;
