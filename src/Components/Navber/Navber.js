// import { AiOutlineSearch } from "react-icons/ai"; 
import React from 'react'
import { NavLink } from "react-router-dom";

function Navber() {
  return (
    <nav className="c bg-slate-900 flex justify-between py-4 px-5 items-center ">
      <div className="logo "><h4 className="font-bold text-2xl font-sans text-green-400">Movie List</h4></div>
      {/* <div className="serch">
        <form className="relative">
          <input type="text" className="rounded-lg w-52 p-1 text-black" name="search" id="search" />
          <button className="absolute right-[5px] top-[50%] bottom-[50%] " type='submit'><AiOutlineSearch className="text-slate-950 transform -translate-y-1/2 text-xl cursor-pointer" /></button>
        </form>
      </div> */}
      <ul className="flex gap-6 font-bold">
        <NavLink className="" to="/">Popular</NavLink>
        <NavLink className="" to="/top-rated">Top Rated</NavLink>
        <NavLink className="" to="/up-comming">Up Comming</NavLink>
      </ul>
    </nav>
  )
}

export default Navber
