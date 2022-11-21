import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar font-poppins">
      {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /> */}
      <h3 className="text-xl font-black text-white uppercase">mediK <span className="text-xl text-blue-400 uppercase">bank</span></h3>

      <ul className="list-none md:flex hidden justify-end items-center flex-1 space-x-5">
     
      {/* <Link to={'/'}><li className="font-bold text-xl text-white">Home</li></Link>    */}
      <Link to={'/login'}><li className="font-bold text-xl text-white hover:text-blue-400">Login</li></Link>  
      <Link to={'/signup'}><li className="font-bold text-xl text-white hover:text-blue-400">Get Started</li></Link>  
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
       
      <Link to={'/login'}>
      <i className="text-white mr-3 text-lg"><UserOutlined/></i>
  
        </Link>
        
        <Link to={'/signup'}>
        <p className="text-base text-black mr-4 uppercase md:hidden bg-white rounded-xl py-2 px-4 font-poppins">sign up</p>
        </Link>
       
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
