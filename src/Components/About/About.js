import React from 'react';
import shakil from '../../Assets/shakil-with-bg.jpg'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
const About = () => {
    return (
        <div>
            <div className='px-10 lg:px-24 lg:mt-20 my-10'>
                <div>
                    <div class="hero ">
                        <div class="grid grid-cols-1 lg:grid-cols-2">
                            <div>
                                <img className='w-96 shadow-2xl rounded-md mx-auto' src={shakil} />
                            </div>
                            <div className='mt-10 lg:mt-0 flex items-center'>
                                <div>
                                    <h2 className='text-3xl font-extrabold'>About Me</h2>
                                    <div className='flex items-center pt-2'>
                                        <div className='border-b-4 w-16 border-stone-900'></div>
                                        <div className='border-b w-36 border-stone-900'></div>
                                    </div>
                                    <p class="py-6">I am Shakil Ahmed. I am studying computer subject in diploma. Recently I finished a course in web development. I love web development because I can showcase my creativity in this work. I want to see myself as a skilled web developer through my hard work. I am just starting my career so I want to work with the kind of people so that I can improve myself professionally and personally through them</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;