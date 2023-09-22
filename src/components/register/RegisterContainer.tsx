import React from "react";
import { graphicDesigner, moving1, moving2 } from "../../assets/images";
import { Button } from "../../utils/Button";

export const RegisterContainer: React.FC = () => {
  return (
    <div className="md:flex justify-between items-center md:px-32">
      <div className=" flex-1 px-5 text-xs montserrat">
        <img src={graphicDesigner} alt="" />
      </div>
      <div
        className={`flex-1 px-5 w-full bg-no-repeat bg-cover shadow-md bgImage`}
      >
        <div className="mx-auto py-8 md:px-8">
          <div className="montserrat">
            <h1 className="class-display text-2xl pb-5 text-[#d434fe] font-bold">
              Register
            </h1>
            <p className="text-xs">
              Be part of this movement!{" "}
              <span className="border-dotted border-b-2 border-[#d434fe]">
                <img
                  src={moving2}
                  alt="moving forward pic"
                  className="inline mb-3"
                />
                <img
                  src={moving1}
                  alt="moving forward pic"
                  className="inline mb-3"
                />
              </span>
            </p>

            <h2>CREATE YOUR ACCOUNT</h2>
          </div>
          <form action="" className="text-xs text-white montserrat">
            <div className="grid md:grid-cols-2 gap-x-4">
              <div className='py-2'>
                <label htmlFor="name" className="block pb-1">Team's Name</label>
                <input
                  type="text"
                  title="name"
                  placeholder="Enter your team name"
                  className="w-full border px-3 py-2 rounded-sm focus:border-[#FF26B9] focus:outline-none text-white bg-[#1C162F]"
                />
              </div>
              <div className='py-2'>
                <label htmlFor="phone" className="block pb-1">Phone</label>
                <input
                  type="tel"
                  title="phone"
                  placeholder="Enter your phone number"
                  className="w-full border px-3 py-2 rounded-sm focus:border-[#FF26B9] focus:outline-none text-white bg-[#1C162F]"
                />
              </div>
              <div className='py-2'>
                <label htmlFor="email" className="block pb-1">Email</label>
                <input
                  type="email"
                  title="email"
                  placeholder="Enter your email"
                  className="w-full border px-3 py-2 rounded-sm focus:border-[#FF26B9] focus:outline-none text-white bg-[#1C162F]"
                />
              </div>
              <div className='py-2'>
                <label htmlFor="" className="block pb-1">Project Topic</label>
                <input
                  type="text"
                  title="project topic"
                  placeholder="What is your group project topic"
                  className="w-full border px-3 py-2 rounded-sm focus:border-[#FF26B9] focus:outline-none text-white bg-[#1C162F]"
                />
              </div>
              <div className='py-2'>
                <label htmlFor="category" className="block pb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="border border-[#8a8989] bg-[#1C162F] focus:border-[#FF26B9] focus:outline-none w-full py-2 px-3 rounded-sm"
                  placeholder="Select your category"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className='py-2'>
                <label htmlFor="group-size" className="block pb-1">
                  Group Size
                </label>
                <select
                  id="group-size"
                  name="group-size"
                  className="border border-[#8a8989] bg-[#1C162F] focus:border-[#FF26B9] focus:outline-none w-full py-2 px-3 rounded-sm"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
              <Button title="Register" className="mt-4 pt-2 w-full" OnClick />
          </form>
        </div>
      </div>
    </div>
  );
};
