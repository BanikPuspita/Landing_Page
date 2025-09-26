import React from 'react';

const Projects = () => {
    return (
        <section className='flex flex-col items-center pt-20 md:pt-40'>
            <div className='flex flex-col items-center text-center'>
                <h1 className='text-4xl font-bold'>My Projects</h1>
                <p className='text-black pt-5'>I build practical and creative projects that showcase my skills in UI/UX and web design. <br /> Each project is crafted to solve real problems and deliver engaging user experiences.</p>
            </div>

            <div className='flex flex-wrap justify-center gap-4 pt-8 items-center text-center'>
                <div className='bg-gray-200 rounded-xl w-24 p-2 border border-gray-400 shadow-sm'>
                    <p className='text-black pt-2'>All</p>
                </div>
                <div className='bg-gray-200 rounded-xl w-24 p-2 border border-gray-400 shadow-sm'>
                    <p className='text-black pt-2'>UI/UX</p>
                </div>
                <div className='bg-orange-500 rounded-xl w-30 p-2 shadow-sm'>
                    <p className='text-white pt-2'>Web Design</p>
                </div>
                <div className='bg-gray-200 rounded-xl w-30 p-2 border border-gray-400 shadow-sm'>
                    <p className='text-black pt-2'>App Design</p>
                </div>
                <div className='bg-gray-200 rounded-xl w-35 p-2 border border-gray-400 shadow-sm'>
                    <p className='text-black pt-2'>Graphic Design</p>
                </div>
            </div>

            <div className='flex flex-wrap justify-center gap-4 pt-8'>
                <div className=' rounded-xl w-60 md:w-70 p-2'>
                    <img className='w-full h-auto rounded-t-xl' src="https://i.ibb.co.com/8n9ng5Zd/Group-25.png" alt="" />
                    <p className='text-orange-400 text-sm'>Web Design</p>
                    <h3 className='text-black font-bold'>AirCalling Landing Page Design</h3>
                    
                </div>
                <div className=' rounded-xl w-70 p-2'>
                    <img className='w-full h-auto rounded-t-xl' src="https://i.ibb.co.com/Kz22whzQ/Group-26.png" alt="" />
                    <p className='text-orange-400 text-sm'>Web Design</p>
                    <h3 className='text-black font-bold'>Business Landing Page Design</h3>
                    
                </div>
                <div className=' rounded-xl w-70 p-2'>
                    <img className='w-full h-auto rounded-t-xl' src="https://i.ibb.co.com/Qw0WVyq/Group-27.png" alt="" />
                    <p className='text-orange-400 text-sm'>Web Design</p>
                    <h3 className='text-black font-bold'>Ecom Web Page Design</h3>
                    
                </div>
            </div>
        </section>
    );
};

export default Projects;