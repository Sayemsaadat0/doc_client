import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navaItem = <>
        <Link to='/login'>Link1</Link>
        <Link to='/login'>Link2</Link>
        <Link to='/login'>Link3</Link>
        <Link to='/login'>Login</Link>
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      {navaItem}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-2xl  tracking-widest font-semibold">Doctors Portal</Link>
            </div>
            {/*  */}
            <div className=" hidden lg:flex w-full justify-end">
                <ul className="menu menu-horizontal lg:flex gap-10 px-1">
                    {navaItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;