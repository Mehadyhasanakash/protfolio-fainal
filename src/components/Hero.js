import React from 'react';

import Typical from "react-typical";



const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Mehady Hasan! 👋
            </p>
            <h1 className='text-3xl leading-[44px] md:text-3xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>


              I am a
              {""}
                            <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Full Stack Developer",
                                        1000,
                                        "MERN Stack Developer",
                                        1000,
                                        "React/ReactNative Developer",
                                        1000,
                                    ]}

                                />
                            </h1>





            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
            Frontend web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization..
            </p>

            <a href="Resume_ Md Mehady Hasan Akash.pdf" download="Resume_ Md Mehady Hasan Akash.pdf">
                            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>GetResume</button>

                        </a>
            
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src="https://i.ibb.co/8cqkNFY/Md-Mehady-Hasan-Akash.png" alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
