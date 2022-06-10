import React from 'react';

// import img


const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src="https://i.ibb.co/8cqkNFY/Md-Mehady-Hasan-Akash.png"
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Md Mehady Hasan Akash
              </h2>
              <p className='mb-4 text-accent'>
                Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Frontend web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization..

              </p>
              <p>Here are a Few Highlights:</p>
              <p>1.Full Stack web and mobile development </p>
              <p>2. Interactive Front End as per the design</p>
              <p>3. React and React Native</p>
              <p>4. Redux for State Mnanagement</p>
              <p>5. Building REST API</p>
              <p>6. Managing database</p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all mt-10'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
