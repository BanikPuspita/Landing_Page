import React from 'react';
import { Link } from 'react-scroll';


const Navbar = () => {
    return (
       <div className='fixed top-0 left-0 w-full bg-base-100 z-50 shadow-md'>
            <div className="navbar px-12">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to='home' smooth={true} duration={600} offset={-80}>Home</Link></li>
                        <li><Link to='about' smooth={true} duration={600} offset={-80}>About Me</Link></li>
                        <li><Link to='services' smooth={true} duration={600} offset={-80}>Services</Link></li>
                        <li><Link to='projects' smooth={true} duration={600} offset={-80}>projects</Link></li>
                        <li><Link to='testimonials' smooth={true} duration={600} offset={-80}>Testimonials</Link></li>
                        <li><Link to='contacts' smooth={true} duration={600} offset={-80}>Contact</Link></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <div className='flex items-center'>
                        <img src="src/assets/logo.png" alt="" className='w-10' />
                        <a className="btn btn-ghost text-2xl font-bold gap-0">M<span className='text-gray-500 font-normal'>umair</span></a>
                    </div>
                </div>
                <div className="flex-none hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='home' smooth={true} duration={600} offset={-80}>Home</Link></li>
                        <li><Link to='about' smooth={true} duration={600} offset={-80}>About Me</Link></li>
                        <li><Link to='services' smooth={true} duration={600} offset={-80}>Services</Link></li>
                        <li><Link to='projects' smooth={true} duration={600} offset={-80}>projects</Link></li>
                        <li><Link to='testimonials' smooth={true} duration={600} offset={-80}>Testimonials</Link></li>
                        <li><Link to='contacts' smooth={true} duration={600} offset={-80}>Contact</Link></li>
                    </ul>
                </div>
                <button className='btn bg-[#FD6F00] text-white px-6 py-2 shadow-md hover:bg-orange-600 transition'><a href="/Mumair_CV.pdf" download="Mumair_CV">Download CV</a></button>  
            </div>
       </div>
    );
};

export default Navbar;


