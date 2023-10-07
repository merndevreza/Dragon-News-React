import { Link, NavLink } from "react-router-dom";
import userAvatar from "../../assets/images/user.png";
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import "./Navbar.css"
import { useState } from "react";

const Navbar = () => {
   const [isOpen,setIsOpen]=useState(false)
   const navbarToggler=()=>{
      setIsOpen(!isOpen);
   }
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-5 items-center">
        <div className="hidden md:block"></div>
        <div className="md:col-span-2">
         <button className="md:hidden text-2xl  border-2 text-[#403F3F] border-[#403F3F] p-1" onClick={navbarToggler}><RxHamburgerMenu></RxHamburgerMenu></button>
          <nav className={`${isOpen?"block  transition-all  absolute w-full h-screen bg-black top-0 left-0 z-10":"hidden md:block"}`}>
            <button onClick={navbarToggler} className="text-2xl text-white absolute right-4 top-4"><AiOutlineClose></AiOutlineClose></button>
            <ul className={`${isOpen?"flex flex-col gap-6 text-2xl text-white justify-center items-center h-full":"flex justify-center gap-3 text-lg text-[#706F6F]"}`}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/career">Career</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-3 justify-end">
          <img className="w-10 h-10" src={userAvatar} alt="user avatar" />
          <Link to="/login">
            <button className="btn rounded-none bg-[#403F3F] text-white py-2 px-11">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
