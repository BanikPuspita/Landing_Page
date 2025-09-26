import React from 'react';

const Services = () => {
    return (
        <section className='flex flex-col items-center pt-20 sm:pt-40'>
            <div className='flex flex-col items-center text-center'>
                <h1 className='text-3xl sm:text-4xl font-bold'>Services</h1>
                <p className='text-black pt-5 '>I provide creative and user-centered design solutions that help businesses and individuals build engaging digital <br /> experiences. From UI/UX design to responsive web interfaces, I focus on delivering high-quality, functional, and visually appealing results.</p>
            </div>

            <div className='flex flex-wrap justify-center gap-4 pt-8'>
                <div className='bg-gray-200 rounded-xl w-60 p-4 flex flex-col items-center'>
                    <img className='w-10' src="https://i.ibb.co.com/QFYvMW3p/UIUX.png" alt="" />
                    <h2 className='text-2xl text-black font-semibold pt-2'>UI/UX</h2>
                    <p className='text-gray-800 pt-2'>A motivated individual seeking opportunities to learn and grow in a professional environment.</p>
                </div>
                <div className='bg-gray-200 rounded-xl w-60 p-4 flex flex-col items-center'>
                    <img className='w-10' src="https://i.ibb.co.com/nhpXkWs/Layer-1.png" alt="" />
                    <h2 className='text-2xl text-black font-semibold pt-2'>Web Design</h2>
                    <p className='text-gray-800 pt-2'>A motivated individual seeking opportunities to learn and grow in a professional environment.</p>
                </div>
                <div className='bg-gray-200 rounded-xl w-60 p-4 flex flex-col items-center'>
                    <img className='w-7' src="https://i.ibb.co.com/htQGpty/Group-18.png" alt="" />
                    <h2 className='text-2xl text-black font-semibold pt-2'>App Design</h2>
                    <p className='text-gray-800 pt-2'>A motivated individual seeking opportunities to learn and grow in a professional environment.</p>
                </div>
                <div className='bg-gray-200 rounded-xl w-60 p-4 flex flex-col items-center'>
                    <img className='w-10' src="https://i.ibb.co.com/k6VnpR8M/Vector-2.png" alt="" />
                    <h2 className='text-2xl text-black font-semibold pt-2'>Graphic Design</h2>
                    <p className='text-gray-800 pt-2'>A motivated individual seeking opportunities to learn and grow in a professional environment.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;