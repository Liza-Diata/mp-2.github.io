import React from 'react'
import { Link } from 'react-router-dom';
import {
        FaFacebookSquare,
        FaInstagram,
        FaTwitterSquare,
        } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-black text-gray-400'>
    <div>
        <h1 className='w-full text-3xl font-extrabold text-gray-300'>Fight <span className='text-[#871f2d] font-extrabold'>SCOUT</span> </h1>
        <p className='py-4'>With Over 20 Professional Fighters and World Class Instructors, You Can Be Sure That You Are Learning From The Top Mixed Martial Artists In The Area. Whether You Want To Fight Or Just Train Like A Fighter We Have Students From The Average Joe To Doctors, Lawyers, and General Hobbyists</p>
    </div>
    <div className='lg:col-4 flex justify-between '>
    <div>
        <h6 className='font-medium text-gray-100 ml-5'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Partners</li>
            <li className='py-2 text-sm'>News</li>
            <li className='py-2 text-sm'>Privacy Policy</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-100 ml-8'>Facilities</h6>
        <ul>
            <li className='py-2 text-sm'>MMA Gym</li>
            <li className='py-2 text-sm'>Muay Thai Gym</li>
            <li className='py-2 text-sm'>Bpxing Gym</li>
            <li className='py-2 text-sm'>BJJ Gym</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-100 ml-8'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Contact Us</li>
            <li className='py-2 text-sm'>FAQs</li>
            <li className='py-2 text-sm'>Referral Program</li>
            <li className='py-2 text-sm'>Terms and Conditions</li>
        </ul>
    </div>
    </div>
    <div>
        <h6 className='font-medium text-gray-100 ml-20'>Contact</h6>
        <ul>
            <li className='py-2 text-sm'>Fight Scout Gym 9325 Dorchester St, #202, Highland Ranch, CO 90129</li>
            <li className='py-2 text-sm'>Call us at 303-123-4567</li>
            <li className='py-2 text-sm'>Connect With Us</li>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30} />
            </div>  
        </ul>
    </div>
 </div>
  )
}
