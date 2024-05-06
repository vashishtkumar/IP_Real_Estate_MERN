import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../Components/ListingItem';
import './Home.css';
import topBanner from '../assets/signin.jpg'; // Add your image here
import twitterIcon from '../assets/x.jpg'; // Import the Twitter SVG icon
import instagramIcon from '../assets/Instagram.png'; // Import the Instagram PNG icon
import githubIcon from '../assets/github.svg'; // Import the GitHub SVG icon

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation, Autoplay]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=6');
        const data = await res.json();
        setOfferListings(data.length < 3 ? data : data.slice(0, 6));
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=6');
        const data = await res.json();
        setRentListings(data.length < 3 ? data : data.slice(0, 6));
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=6');
        const data = await res.json();
        setSaleListings(data.length < 3 ? data : data.slice(0, 6));
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* Top Section */}
      <div
        className='flex flex-col gap-6 py-16 px-4 sm:px-8'
        style={{
          backgroundImage: `url(${topBanner})`,
        }}
      >
        <div className='bg-white bg-opacity-80 shadow-lg rounded-lg p-6 sm:p-10 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl'>
          <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
            Unlock your <span className='text-slate-500'>perfect</span>
            <br />
            space with <span className='text-blue-700'>UrbaNest</span>
          </h1>
          <div className='text-gray-500 text-xs sm:text-sm mt-3'>
            Discover a seamless way to find your next home with UrbaNest.
            <br />
            We curate properties that match your unique needs.
          </div>
          <Link
            to={'/search'}
            className='text-xs sm:text-sm text-blue-800 font-bold mt-4 block hover:underline'
          >
            Let's get started...
          </Link>
        </div>
      </div>

      {/* Swiper Section */}
      <Swiper
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Automatic navigation every 3 seconds
      >
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Listings Results */}
      <div id='divmain'>
        <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
          {offerListings && offerListings.length > 0 && (
            <div>
              <div className='my-3'>
                <h2 className='text-2xl font-semibold text-slate-100'>Recent offers</h2>
                <Link className='text-sm text-blue-200 hover:underline' to={'/search?offer=true'}>
                  Show more offers
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {rentListings && rentListings.length > 0 && (
            <div>
              <div className='my-3'>
                <h2 className='text-2xl font-semibold text-slate-100'>Recent places for rent</h2>
                <Link className='text-sm text-blue-200 hover:underline' to={'/search?type=rent'}>
                  Show more places for rent
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {saleListings && saleListings.length > 0 && (
            <div>
              <div className='my-3'>
                <h2 className='text-2xl font-semibold text-slate-100'>Recent places for sale</h2>
                <Link className='text-sm text-blue-200 hover:underline' to={'/search?type=sale'}>
                  Show more places for sale
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-gray-800 text-white text-center p-4'>
        <div className='container mx-auto'>
          <p className='text-sm md:text-base'>© 2024 UrbaNest. All rights reserved.</p>
          <div className='flex justify-center space-x-4 mt-2'>
            <a href='/' className='hover:text-gray-300'>
              Home
            </a>
            <a href='/about' className='hover:text-gray-300'>
              About Us
            </a>
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
            <p>
              Email:{' '}
              <a href='mailto:info@urbanest.com' className='hover:text-gray-300'>
                info@urbanest.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href='tel:+1234567890' className='hover:text-gray-300'>
                +91 8340375191
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
