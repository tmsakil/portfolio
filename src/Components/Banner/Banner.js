import React from 'react';
import shakilImg from '../../Assets/shakil.png'
const Banner = () => {
    return (
        <div className=''>
            <div id='/'>
                <div class="hero  bg-[#202020]">
                    <div class="hero-content flex-col lg:flex-row-reverse p-0">
                        <div className='lg:px-14'>
                            <img src={shakilImg} />
                        </div>
                        <div className='text-white lg:px-14'>
                            <h1 class="text-5xl font-bold font-thin">I'M Shakil Ahmed</h1>
                            <p class="py-6 font-thin text-xl">WEB DEVELOPER</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;