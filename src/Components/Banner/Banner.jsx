import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="pt-20">
        <div className="flex flex-col md:flex-row justify-evenly items-center max-w-7xl mx-auto px-6 md:px-2 py-10 ">
            <div className="text-center md:text-left md:w-1/2 space-y-4">
                <p className="text-lg text-black">Hi I am</p>
                <h3 className="text-xl md:text-xl font-bold text-[#FD6F00]">Muhammad Umair</h3>
                <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">UI & UX <br /><p className="md:pl-30">Designer</p></h1>
                <p className="text-black text-lg max-w-md mx-auto md:mx-0"> A motivated individual seeking opportunities to learn and grow in a professional environment. Passionate about technology and problem-solving.</p>
                <button onClick={() => {
                    const contactBtn = document.getElementById("contactButton");
                    if(contactBtn) {
                        contactBtn.scrollIntoView({behavior: "smooth", block: "center"})
                    contactBtn.focus()
                }} 
                    }
                className="btn bg-[#FD6F00] text-white px-6 py-2 shadow-md hover:bg-orange-600 transition">Hire Me</button>
            </div>

            <div>
                <img className="w-64 md:w-100" src="src/assets/profile.png" alt="" />
                <div className='w-50 h-12 bg-orange-400/50 transform -translate-y-100 translate-x-24'></div>
                <div className="flex gap-4 mt-4 text-2xl justify-center pt-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Banner;




