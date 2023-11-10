import { Carousel } from 'flowbite-react'
import React from 'react'
import banner1 from './../assets/banner1.png'

const Home = () => {
  return (
    <div id="home" className='bg-neutralSilver'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
            <Carousel className='w-full mx-auto'>
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse justify-center items-center gap-12 ">
                    <div>
                        <img src={banner1} alt="Slider Image"/>
                    </div>
                    {/* hero text */}
                    <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey leading-snug'>Lessons and insights <br/><span className='text-brandPrimary leading-snug'> from 8 years</span></h1>
                        <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                        <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Register</button>
                    </div>
                </div>
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse justify-center items-center gap-12 ">
                    <div>
                        <img src={banner1} alt="Slider Image"/>
                    </div>
                    {/* hero text */}
                    <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey leading-snug'>Elevate Your Brand, <br/><span className='text-brandPrimary leading-snug'> Captivate Your Audience.</span></h1>
                        <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                        <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Register</button>
                    </div>
                </div>
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse justify-center items-center gap-12 ">
                    <div>
                        <img src={banner1} alt="Slider Image"/>
                    </div>
                    {/* hero text */}
                    <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey leading-snug'>Innovative Solutions, <br/><span className='text-brandPrimary leading-snug'> Seamless Results.</span></h1>
                        <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                        <button className='btn-primary'>Register</button>
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Home