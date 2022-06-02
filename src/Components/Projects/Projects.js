import React from 'react';
import website1 from '../../Assets/website1.png'
import website2 from '../../Assets/website2.png'
import website3 from '../../Assets/website3.png'
const Projects = () => {
    return (
        <div className='px-5 lg:px-24 my-10'>
            <div className='my-10'>
                <h2 className='text-3xl font-extrabold'>Projects</h2>
                <div className='flex items-center pt-2'>
                    <div className='border-b-4 w-16 border-stone-900'></div>
                    <div className='border-b w-36 border-stone-900'></div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-20'>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
                    <figure><img src={website1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Phone Creation</h2>
                        <p>● Short Overview:
                            <br />
                            ❖ This is a medium-level full-stack project. There are some separate routes for
                            admins, such as add products, manage products, manage orders, and make
                            admin.
                            <br />
                            ❖ The stripe has been used for the payment gateway and the customer will be
                            able to pay via card.
                            <br />
                            ● Technology Used:
                            <br />
                            ❖ React, Firebase, Express js, MongoDB, Stripe, Tailwind, Swiper, React Query,
                            Tailwind [daisyUi], React Hot Toast</p>
                        <div class="card-actions justify-end">
                            <a target="_blank" href="https://assignment-12-50cc2.web.app/" className='btn'>Live Preview</a>
                        </div>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
                    <figure><img src={website2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Cycle World</h2>
                        <p>● Short Overview:
                            <br />
                            ❖ JWT and Firebase are used for security and authentication.
                            <br />
                            ❖ If you want you can increase the quantity of products, as well as delivery,
                            delete and add
                            <br />
                            ● Technology Used:
                            <br />
                            ❖ React, JWT, Tailwind ( daisy UI, Flobite, Swiper), Express.js, MongoDB.</p>
                        <div class="card-actions justify-end">
                            <a target="_blank" href="https://assignment11-a3660.web.app/" className='btn'>Live Preview</a>
                        </div>
                    </div>
                </div>

                <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
                    <figure><img src={website3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Center Of Strength</h2>
                        <p>● Short Overview:
                            <br />
                            ❖ The website uses firebase for authentication.
                            <br />
                            ❖ React Router has been used for a better user experience
                            <br />
                            ● Technology Used:
                            <br />
                            ❖ React, React router, React firebase hook, Tailwind (daisy UI), React Toastify</p>
                        <div class="card-actions justify-end">
                            <a target="_blank" href="https://assignment10-e4ffa.web.app/" className='btn'>Live Preview</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;