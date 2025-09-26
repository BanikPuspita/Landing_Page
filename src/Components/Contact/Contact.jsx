import React, { useState } from 'react';

const Contact = () => {

     const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }


    return (
        <section className='flex flex-col items-center pt-20 md:pt-40 pb-20'>
            <div className='flex flex-col items-center text-center'>
                <h1 className='text-3xl md:text-4xl font-bold'>Lets Design Together</h1>
                <p className='text-black pt-5 max-w-md text-center'>Let’s connect and create something amazing together.
Feel free to reach out for collaborations, projects, or any inquiries.</p>
            </div>

            <div className='flex flex-col md:flex-row justify-center gap-5 pt-12'>
                <form onSubmit={handleSubmit} className='border border-gray-400 w-80 rounded flex items-center'>
                    <input className='w-full h-full' type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter Your Email' required />
                </form>
                <button id='contactButton' className='btn bg-[#FD6F00] text-white px-6 py-2 shadow-md hover:bg-orange-600 transition'>Contact Me</button>
            </div>

            
        </section>
    );
};

export default Contact;