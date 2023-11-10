
'use client';

import { Footer } from 'flowbite-react';

import Icon from './../assets/Icon.png'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
  return (
    <Footer container>
      <div id="footer" className="w-full md:px-14 my-1 py-6 px-4 text-slate-200">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='mb-4'>
          <a href='' className='text-2xl font-semibold flex items-center space-x-3'><img src={Icon} alt="logo"className='w-10 inline-block items-center' /><span className='text-[#263238]'>NEXCENT</span></a>
          <div className='mt-4 text-neutral-500'>
            <p>Copyright © 2023 Nexcent Ltd.</p>
            <p>All rights reserved</p>
          </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link className='hover:text-brandPrimary' href="#">Flowbite</Footer.Link>
                <Footer.Link className='hover:text-brandPrimary'  href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link className='hover:text-brandPrimary' href="#">Github</Footer.Link>
                <Footer.Link className='hover:text-brandPrimary' href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link className='hover:text-brandPrimary' href="#">Privacy Policy</Footer.Link>
                <Footer.Link className='hover:text-brandPrimary' href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Nexcent™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className='hover:text-brandPrimary' href="#" icon={BsFacebook} />
            <Footer.Icon className='hover:text-brandPrimary' href="#" icon={BsInstagram} />
            <Footer.Icon className='hover:text-brandPrimary' href="#" icon={BsTwitter} />
            <Footer.Icon className='hover:text-brandPrimary' href="#" icon={BsGithub} />
            <Footer.Icon className='hover:text-brandPrimary' href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter;