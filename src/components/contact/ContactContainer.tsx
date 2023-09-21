import React from "react";
import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";
import { formBg } from "../../assets/images";
import { Button } from "../../utils/Button";


export const ContactContainer: React.FC = () => {
  return (
    <div className="md:flex justify-between items-center md:px-32">
      <div className="hidden md:block flex-1 px-5 text-xs montserrat">
        <h2 className="class-display text-lg text-[#d434fe] font-bold">Get in touch</h2>
        <p className="mt-4">
          Contact <br />
          Information
        </p>
        <div className="hidden md:block">
        <div className="mt-4">
          <p className="flex">
            <span>
              27,Alara Street <br /> Yaba 100012 <br /> Lagos State
            </span>
          </p>
          <Link to="tel:+2346707653444" className="mt-2">Call us: +234 6707653444</Link>
        </div>

        <p className="mt-4">
          we are open from Monday-Friday <br />
          08:00am - 05:00pm
        </p>
        <p className="flex-1 mt-4">
          <span className="text-[#d434fe] block font-bold">Follow us</span>
          <span className="inline-block text-lg text-white ml-3">
            <FaInstagram />
          </span>
          <span className="inline-block text-lg text-white ml-3">
            <FaXTwitter />
          </span>
          <span className="inline-block text-lg text-white ml-3">
            <FaFacebookF />
          </span>
          <span className="inline-block text-lg text-white ml-3">
            <FaLinkedinIn />
          </span>
        </p>

        </div>
      </div>
      <div className={`flex-1 px-5 w-full bg-[url(${formBg})] bg-no-repeat bg-cover shadow-md bgImage`}>
        <div className="mx-auto py-8 md:px-16">
          <div className="class-display text-sm text-[#d434fe] font-bold">
            <h3 className="">Questions or need assistance?</h3>
            <p className="">Let us know about it!</p>
          </div>
          <p className="md:hidden text-xs montserrat">Email us below to any question related <br /> 
to our event</p>
          <form action="" className="text-white">
            <div>
              <input type="text" title="name" placeholder="First name" className="w-full border px-3 py-2 rounded-md text-white mt-4 bg-[#1C162F]"/>
            </div>
            <div>
              <input type="email" title="email" placeholder="email" className="w-full border px-3 py-2 rounded-md text-white mt-4 bg-[#1C162F]"/>
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols={30}
                rows={5}
                title="message"
                className="w-full border rounded-md mt-4 bg-[#1C162F]"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
          <Button title="Register" className="mt-4 pt-2" OnClick/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
