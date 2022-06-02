import React from 'react';
import html from '../../Assets/html.png'
import css from '../../Assets/css.png'
import js from '../../Assets/js.png'
import react from '../../Assets/react.png'
const Skill = () => {
    return (
        <div className='px-5 lg:px-24 my-10'>
            <div>
                <h2 className='text-3xl font-extrabold'>My Skills</h2>
                <div className='flex items-center pt-2'>
                    <div className='border-b-4 w-16 border-stone-900'></div>
                    <div className='border-b w-36 border-stone-900'></div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3'>
                <div className='mx-auto'>
                    <h2 className='font-bold text-xl mt-4 mb-2'>Front End (Expertise)</h2>
                    <div className='flex items-center'>
                        <p>HTML5 | CSS3 | Bootstrap | Tailwind CSS | JavaScript | React</p>
                    </div>
                </div>

                <div className='mx-auto'>
                    <h2 className='font-bold text-xl mt-4 mb-2'>Back End (Familiar)</h2>
                    <div className='flex items-center'>
                        <p>Node js | Express js | MongoDB | Rest Api</p>
                    </div>
                </div>

                <div className='mx-auto'>
                    <h2 className='font-bold text-xl mt-4 mb-2'>Tools</h2>
                    <div className='flex items-center'>
                        <p>Github | Heroku | Netlify | Firebase | Postman | VS Code</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skill;