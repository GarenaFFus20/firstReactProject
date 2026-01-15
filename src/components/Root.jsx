import React, { useState } from "react";
import Navbar from "./Navbar";
import { MdOutlineStarRate } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { GiGalaxy } from "react-icons/gi";

const Root = () => {
  // useState babohar korsi akta chalu korla arakta bondo hoba
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }






  return (
    <nav className="bg-blue-600 text-white py-4 md:py-6">
      <div className=" container mx-auto flex justify-between items-center">
        <h3>
          <GiGalaxy className="text-3xl md:text-5xl text-red-600" />
        </h3>

        {/* Mobile Menu Button */}
        <div>
          {/* button a click korar por akta logor bodola arakta logo asba */}
          <button onClick={toggleMenu}>
            {
              isOpen ? <IoMdClose /> : <MdOutlineStarRate />
            }

          </button>
        </div>

        <ul className="flex space-x-4 md:space-x-6">
          <li> Home </li>
          <li> Products </li>
          <li> Blogs </li>
          <li> Contact </li>
          <li> About </li>
        </ul>

        <button>Loing</button>
      </div>
    </nav>




  );
};

export default Root;
