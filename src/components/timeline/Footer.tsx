import React from "react";
import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FiPhoneCall } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'

export const Footer: React.FC = () => {
  return (
    <footer className="text-xs md:text-sm">
      <div className="md:px-20 px-5 md:flex gap-16 justify-between items-center relative">
        <div className="flex-1">
          <Link to="/" className="class-display font-bold text-lg">
            get<span className="text-[#d434fe]">linked</span>
          </Link>
          <p>
            Getlinked Tech Hackathon is a technology innovation program <br className="hidden md:block"/>
            established by a group of organizations with the aim of showcasing <br className="hidden md:block"/>
            young and talented individuals in the field of technology
          </p>

          <p className="md:hidden my-5">
          Terms of Use <span className="w-0.5 h-6 inline-block bg-[#d434fe]"></span> Privacy
          Policy
        </p>
        </div>
        <div className="flex-1">
          <div className="md:flex justify-between md:py-16 items-center">
            <div className="flex-1">
              <p className="text-[#d434fe] font-bold">Useful Links</p>
              <ul>
                <li className="mt-3">
                  <Link to="/">Overview</Link>
                </li>
                <li className="mt-3">
                  <Link to="/">Timeline</Link>
                </li>
                <li className="mt-3">
                  <Link to="/">FAQs</Link>
                </li>
                <li className="mt-3">
                  <Link to="/">Register</Link>
                </li>
              </ul>
              <p className="flex-1 md:hidden pt-2">
            <span  className="text-[#d434fe] font-bold">Follow us</span>
          
          <span className="inline-block text-lg text-white ml-3">
            <FaInstagram />
          </span>{" "}
          <span className="inline-block text-lg text-white ml-3">
            <FaXTwitter />
          </span>{" "}
          <span className="inline-block text-lg text-white ml-3">
            <FaFacebookF />
          </span>{" "}
          <span className="inline-block text-lg text-white ml-3">
            <FaLinkedinIn />
          </span>
        </p>
            </div>
            <div className="mt-5 md:mt-0 flex-1">
              <p className="text-[#d434fe] font-bold">Contact Us</p>
              <div>
                <Link to="tel:+2346707653444"><FiPhoneCall className='inline-block mr-2 mt-2 md:mt-0 mb-4 text-lg' /> +234 6707653444</Link>
                <p className="flex"> <IoLocationOutline className='inline-block mr-2 text-lg'/> <span>27,Alara Street <br /> Yaba 100012 <br /> Lagos State</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-20 px-5 md:flex gap-16 justify-between items-center">
        <p className="flex-1 hidden md:block">
          Terms of Use <span className="w-0.5 h-6 inline-block bg-[#d434fe]"></span> Privacy
          Policy
        </p>

        <p className="flex-1 hidden md:block">
            <span  className="text-[#d434fe] font-bold">Follow us</span>
          
          <span className="inline-block text-lg text-white ml-3">
            <FaInstagram />
          </span>{" "}
          <span className="inline-block text-lg text-white ml-3">
            <FaXTwitter />
          </span>{" "}
          <span className="inline-block text-lg text-white ml-3">
            <FaFacebookF />
          </span>{" "}
          <span className="inline-block text-lg text-white ml-3">
            <FaLinkedinIn />
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center py-6">
        <p>All rights reserved. &copy; getlinked Ltd.</p>
      </div>

    </footer>
  );
};
