import React from "react";
import aboutImg from "../../assets/about.png"

const AboutMe = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-20">

        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-64 md:w-100 rounded-full border-4 border-[#FD6F00]"
            src={aboutImg}
            alt=""
          />
          <div className='w-50 h-12 bg-orange-400/50 transform translate-y-15 -translate-x-71 '></div>
        </div>

        <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
            <p className="text-black">I am a passionate UI/UX designer with a keen eye for detail. I enjoy creating intuitive and engaging user experiences and am always eager to learn new technologies to solve real-world problems.</p>

            <div className="space-y-5 mt-6">

                {[
                    {title: 'UX', percent: 80},
                    {title: 'Website Design', percent: 90},
                    {title: 'App Design', percent: 75},
                    {title: 'Graphic Design', percent: 95}
                ].map((skill, index) => (
                    <div key={index}>
                        <p className="font-bold text-gray-800 mb-1">{skill.title}</p>
                        <div className="w-full h-2 bg-gray-200 rounded-full relative">
                            <div className="h-2 bg-[#FD6F00] rounded-full relative" style={{width: `${skill.percent}%`}}>
                                <div className="absolute -right-2 -top-1 w-4 h-4 bg-white border-2 border-[#FD6F00] rounded-full">

                                </div>

                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;


