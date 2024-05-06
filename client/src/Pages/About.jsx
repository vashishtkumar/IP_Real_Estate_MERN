import React from 'react';
import './about.css';
import vansh from '../assets/vansh.jpg';
import varun from '../assets/varun.jpg';
import vashisht from '../assets/vashisht.jpg';
import vivek from '../assets/vivek.jpg';
import twitterIcon from '../assets/x.jpg'; // Import Twitter SVG icon
import instagramIcon from '../assets/Instagram.png'; // Import Instagram PNG icon
import githubIcon from '../assets/github.svg'; // Import GitHub SVG icon

export default function About() {
  return (
    <>
      <div id='about'>
        <div className='py-20 px-4 max-w-6xl mx-auto'>
          <h1 className='text-3xl font-bold mb-4 text-slate-1000 text-center'>About UrbaNest</h1>
          <p className='mb-4 text-white'>
            UrbaNest is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
          </p>
          <p className='mb-4 text-white'>
            Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
          </p>
          <p className='mb-4 text-white'>
            Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
          </p>
        </div>
      </div>
      <div className='text-center p-4'>
        <h1 className='text-3xl font-bold'>Developed by</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4'>
        <div className='w-full h-64 relative group'>
          <img
            src={vashisht}
            alt='Vashisht'
            className='w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out'
          />
          <span className='absolute bottom-0 left-0 w-full text-center p-1 bg-black bg-opacity-50 text-white rounded-b-lg'>
            Vashisht - Frontend & Backend Development
          </span>
        </div>
        <div className='w-full h-64 relative group'>
          <img
            src={varun}
            alt='Varun'
            className='w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out'
          />
          <span className='absolute bottom-0 left-0 w-full text-center p-1 bg-black bg-opacity-50 text-white rounded-b-lg'>
            Varun - Database Management
          </span>
        </div>
        <div className='w-full h-64 relative group'>
          <img
            src={vivek}
            alt='Vivek'
            className='w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out'
          />
          <span className='absolute bottom-0 left-0 w-full text-center p-1 bg-black bg-opacity-50 text-white rounded-b-lg'>
            Vivek - API Development & Backend Development
          </span>
        </div>
        <div className='w-full h-64 relative group'>
          <img
            src={vansh}
            alt='Vansh'
            className='w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out'
          />
          <span className='absolute bottom-0 left-0 w-full text-center p-1 bg-black bg-opacity-50 text-white rounded-b-lg'>
            Vansh - Testing & Quality Assurance
          </span>
        </div>
      </div>
      <footer className='bg-gray-800 text-white text-center p-4'>
        <div className='container mx-auto'>
          <p className='text-sm md:text-base'>© 2024 UrbaNest. All rights reserved.</p>
          <div className='flex justify-center space-x-4 mt-2'>
            <a href='/' className='hover:text-gray-300'>Home</a>
            <a href='/about' className='hover:text-gray-300'>About Us</a>
          </div>
          <div className='mt-4 flex justify-center space-x-4'>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-300'
            >
              <img src={twitterIcon} alt='Twitter Logo' className='h-6 w-6' />
            </a>
            <a
              href='https://www.instagram.com/vashisht__yadav/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-300'
            >
              <img src={instagramIcon} alt='Instagram Logo' className='h-6 w-6' />
            </a>
            <a
              href='https://github.com/vashishtkumar/IP_Real_Estate_MERN'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-300'
            >
              <img src={githubIcon} alt='GitHub Logo' className='h-6 w-6' />
            </a>
          </div>
          <div className='text-sm md:text-base mt-4'>
            <p>Have any questions? Contact us:</p>
            <p>Email: <a href='mailto:info@urbanest.com' className='hover:text-gray-300'>info@urbanest.com</a></p>
            <p>Phone: <a href='tel:+91 8340375191' className='hover:text-gray-300'>+91 8340375191</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}
