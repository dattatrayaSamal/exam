import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-xl">
      <div className="flex justify-around container mx-auto  p-2">
        <div className="w-1/4 text-center">
          <Link to="/" className="hover:text-purple-600 text-[20px]">
            Masai
          </Link>
        </div>
        <div className="flex justify-around w-1/2">
          <NavLink className="hover:text-purple-600 text-[20px]" to="/">
            Home
          </NavLink>
          <NavLink className="hover:text-purple-600 text-[20px]" to="/products">
            Products
          </NavLink>
          <NavLink className="hover:text-purple-600 text-[20px]" to="/profile">
            Profile
          </NavLink>
          <NavLink className="hover:text-purple-600 text-[20px]" to="/about">
            About
          </NavLink>
          <NavLink className="hover:text-purple-600 text-[20px]" to="/register">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
