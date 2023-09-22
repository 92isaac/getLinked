/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { formBg } from "../../assets/images";
import { Button } from "../../utils/Button";
import axios from 'axios'
import { BaseUrl } from "../../utils/data";

export const ContactContainer: React.FC = () => {
  const [contactData, setContactData] = useState({
    email: "",
    phone_number: "",
    first_name: "",
    message: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      if (contactData.email && contactData.first_name && contactData.message && contactData.phone_number) {
        console.log(contactData);
        const response = await axios.post(
          `${BaseUrl}/hackathon/registration`,
          {
            email: contactData.email,
            phone_number: contactData.phone_number,
            first_name: contactData.first_name,
            message: contactData.message,
         
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          toast.success("Your message has been sent")
          console.log(contactData)
          console.log("Response:", response.data);
        }
        console.log("Response:", response.data);
      } else {
        toast.error("Something went wrong")
      }
    } catch (error:any) {
      toast.error(error.message)
      console.error("Error:", error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="md:flex justify-between items-center md:px-32">
      <div className="hidden md:block flex-1 px-5 text-sm montserrat">
        <h2 className="class-display text-2xl text-[#d434fe] font-bold">
          Get in touch
        </h2>
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
            <Link to="tel:+2346707653444" className="mt-2">
              Call us: +234 6707653444
            </Link>
          </div>

          <p className="mt-4">
            we are open from Monday-Friday <br />
            08:00am - 05:00pm
          </p>
          <div className="flex-1 mt-4">
            <div className="text-[#d434fe] block font-bold">Follow us</div>
            <div className="flex gap-5 items-center">
              <span className="inline-block text-lg text-white">
                <FaInstagram />
              </span>
              <span className="inline-block text-lg text-white">
                <FaXTwitter />
              </span>
              <span className="inline-block text-lg text-white">
                <FaFacebookF />
              </span>
              <span className="inline-block text-lg text-white">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="px-5 md:hidden"
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoChevronBackCircleOutline className="text-2xl text-[#d434fe]" />
      </div>
      <div
        className={`flex-1 px-5 w-full bg-[url(${formBg})] bg-no-repeat bg-cover shadow-md bgImage`}
      >
        <div className="mx-auto py-8 md:px-16">
          <div className="class-display text-sm text-[#d434fe] font-bold">
            <h3 className="">Questions or need assistance?</h3>
            <p className="">Let us know about it!</p>
          </div>
          <p className="md:hidden text-xs montserrat">
            Email us below to any question related <br />
            to our event
          </p>
          <form action="" className="text-white">
            <div className="py-1">
              <input
                type="text"
                title="name"
                value={contactData.first_name}
                onChange={(e)=>{setContactData({...contactData, first_name:e.target.value})}}
                placeholder="First name"
                className="w-full border px-3 py-2 rounded-md text-white mt-4 bg-[#1C162F]"
              />
            </div>
            <div className="py-1">
              <input
                type="tel"
                title="telphone"
                value={contactData.phone_number}
                onChange={(e)=>{setContactData({...contactData, phone_number:e.target.value})}}
                placeholder="phone number"
                className="w-full border px-3 py-2 rounded-md text-white mt-4 bg-[#1C162F]"
              />
            </div>
            <div className="py-1">
              <input
                type="email"
                title="email"
                value={contactData.email}
                onChange={(e)=>setContactData({...contactData, email: e.target.value})}
                placeholder="email"
                className="w-full border px-3 py-2 rounded-md text-white mt-4 bg-[#1C162F]"
              />
            </div>
            <div className="py-1">
              <textarea
                name=""
                id=""
                cols={30}
                rows={5}
                title="message"
                value={contactData.message}
                onChange={(e)=>setContactData({...contactData, message:e.target.value})}
                className="w-full border rounded-md mt-4 bg-[#1C162F]"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <Button title="Submit" className="mt-4 pt-2" OnClick={handleSubmit} />
            </div>
          </form>
        </div>
        <div className="md:hidden flex justify-center pb-5 items-center">
          <div className="mt-4">
            <span className="text-[#d434fe] block text-sm text-center font-bold">
              Follow us
            </span>
            <div className="flex justify-center-items-center pt-2 gap-4">
              <span className="inline-block text-white">
                <FaInstagram />
              </span>
              <span className="inline-block text-white">
                <FaXTwitter />
              </span>
              <span className="inline-block text-white">
                <FaFacebookF />
              </span>
              <span className="inline-block text-white">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
