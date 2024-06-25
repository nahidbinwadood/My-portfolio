/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className='flex flex-col gap-12 md:h-[90vh] sm:my-16 md:my-0 lg:flex-row justify-between items-center'>
            <div className='flex flex-col gap-12'>
                <div className='text-white text-xl md:text-5xl space-y-4 font-bold'>
                <h2>Hello !</h2>
                <h2>I'm <span className='text-[#2EB2D3]'>Frontend Developer</span></h2>
                <h2>Akm Nahid Bin Wadood</h2>
                </div>
                <div>
                    <button className='md:font-semibold bg-[#2EB2D3] px-5 py-2 md:px-12 md:py-4 text-white rounded-full'>Hire me</button>
                </div>
            </div>
            <div  >
                <Image className='rounded-full' height="640" width="540" alt='myProfile' src="/assets/myProfile.jpg"/>
            </div>
        </div>
    );
};

export default Hero;