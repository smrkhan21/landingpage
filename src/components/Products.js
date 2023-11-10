import React from 'react'
import aboutImg from './../assets/pana.png'

const Products = () => {
  return (
    <div id="products">
        {/* about text */}
        <div className='px-4 lg:px-14 max-w-screen-2xl my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div className='md:w-3/5'>
                    <img src={aboutImg} alt="" />
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                    <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <button className='btn-primary'>Learn More</button>
                </div>
            </div>
        </div>
        {/* company stats */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/3'>
                    <img src="/src/assets/tesla.png" alt="" />
                </div>
                <div className='md:w-2/3 mx-auto'>
                    <p className='md:w-4/5 text-neutralGrey text-sm mb-8 leading-8'>
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                    <p className='text-base text-neutralGrey mb-8'>British Dragon Boat Racing Association</p>
                    <div>
                        <div className='flex items-center gap-8 flex-wrap'>
                            <img src="/src/assets/logo_1.png" alt="" className='cursor-pointer' />
                            <img src="/src/assets/logo_2.png" alt="" />
                            <img src="/src/assets/logo_3.png" alt="" />
                            <img src="/src/assets/logo_4.png" alt="" />
                            <img src="/src/assets/logo_5.png" alt="" />
                            <img src="/src/assets/logo_6.png" alt="" />
                            <div className='items-center gap-8'>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers
                                    <svg className='inline-block ml-2' xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 6 4" fill="none">
                                        <path d="M4.02324 3.24222L5.12263 2.14283C5.25301 2.01245 5.25301 1.80106 5.12263 1.67068L4.02324 0.571289M5.02484 1.90676L0.350708 1.90676" stroke="#4CAF4F" strokeWidth="0.5008" strokeLinecap="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products