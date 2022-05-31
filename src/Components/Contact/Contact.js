import React from 'react';
import facebook from '../../Assets/facebook.png'
import github from '../../Assets/github.png'
import linkedin from '../../Assets/linkedin.png'
const Contact = () => {
    return (
        <div className='px-5 lg:px-24 my-10'>
            <div>
                <h2 className='text-3xl font-extrabold'>Get In Touch</h2>
                <div className='flex items-center pt-2'>
                    <div className='border-b-4 w-16 border-stone-900'></div>
                    <div className='border-b w-36 border-stone-900'></div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-8'>
                <div className='md:mx-auto'>
                    <p> <span className='font-bold'>Address :</span> Mirpur 13, Dhaka 1216</p>
                    <p><span className='font-bold'>Email :</span>tmsakil10@gmail.com</p>
                    <p className='mb-2'><span className='font-bold'>Phone :</span>+880 1877018851</p>
                    <div className='flex'>
                        <a target="_blank" href="https://www.facebook.com/iamshakilahmed.09/"><img className='w-8 mx-2' src={facebook} alt="" /></a>
                        <a target="_blank" href="https://github.com/tmsakil"><img className='w-8 mx-2' src={github} alt="" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/tmsakil/"><img className='w-8 mx-2' src={linkedin} alt="" /></a>
                    </div>
                </div>
                <div>
                    <div className='grid md:grid-cols-2 mt-8 md:mt-0'>
                        <div className='md:px-5 my-3'>
                            <input type="text" name="" id="" placeholder='Name here*' className='outline-none border-b-2 w-full' />
                        </div>
                        <div className='md:px-5 my-3'>
                            <input type="email" name="" id="" placeholder='Email here*' className='outline-none border-b-2 w-full ' />
                        </div>
                    </div>
                    <div className='md:px-5 my-3'>
                        <textarea type="text" name="" id="" placeholder='Message here*' className='outline-none border-b-2 w-full ' />
                    </div>
                    <div className='md:px-5 my-3'>
                        <button className='btn rounded float-right'>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;