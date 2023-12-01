import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="flex text-center">
      <Link to="/">
        <span className=" text-center text-4xl">Redux Store</span>
      </Link>
      <div className=" flex items-center content-center gap-4 ml-14">
        <Link className=" text-white bg-slate-500 rounded " to="/">
          HOME
        </Link>
        <Link className=" text-white bg-slate-500 rounded " to="/cart">
          CART
        </Link>
        <span>CART ITEMS: {items.length} </span>
      </div>
    </div>
  );
};

export default Navbar;
