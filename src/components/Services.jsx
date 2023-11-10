import React from 'react'
import logo_1 from './../assets/logo_1.png';
import logo_2 from './../assets/logo_2.png';
import logo_3 from './../assets/logo_3.png';
import logo_4 from './../assets/logo_4.png';
import logo_5 from './../assets/logo_5.png';
import logo_6 from './../assets/logo_6.png';
import logo_7 from './../assets/logo_7.png';

const Services = () => {
    const services = [
        {id: 1, image:'/src/assets/icon_1.png', title:'Membership Organisations', description: 'Our membership management software provides full automation of membership renewals and payments'},
        {id: 2, image:'/src/assets/icon_2.png', title:'National Associations', description: 'Our membership management software provides full automation of membership renewals and payments'},
        {id: 3, image:'/src/assets/icon_3.png', title:'Clubs And Groups', description: 'Our membership management software provides full automation of membership renewals and payments'},
    ]
  return (
    <div id="services" className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
        <div className="text-center my-8">
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
            <p className='text-neutralGrey'>We have been working with some Fortune 500+ clients</p>
            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                <img src={logo_1} alt="logo_1" />
                <img src={logo_2} alt="logo_2" />
                <img src={logo_3} alt="logo_3" />
                <img src={logo_4} alt="logo_4" />
                <img src={logo_5} alt="logo_5" />
                <img src={logo_6} alt="logo_6" />
                <img src={logo_7} alt="logo_7" />
            </div>
        </div>
        <div className="mt-20 md:w-1/2 mx-auto text-center">
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Manage your entire community in a single system</h2>
            <p className='text-neutralGrey'>Who is Nextcent suitable for?</p>
        </div>
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid:cols-1 md:w-11/12 mx-auto gap-12'>
            {
                services.map((service) => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                    <div>
                        <div className='bg-[#E8F5F9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt=""/></div>
                        <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                        <p className='text-sm text-neutralGrey'>{service.description}</p>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Services