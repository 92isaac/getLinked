import React, { useEffect, useState } from "react";
import {
  graphicDesigner,
  moving1,
  moving2,
  success,
} from "../../assets/images";
import { Button } from "../../utils/Button";
import axios from "axios";
import { BaseUrl } from "../../utils/data";
import Modal from "../../utils/Modal";
import { toast } from "react-toastify";

interface RegistrationState {
  team_name: string;
  phone_number: string;
  email: string;
  project_topic: string;
  category: string;
  group_size: number;
  privacy_policy_accepted: boolean;
}

export const RegisterContainer: React.FC = () => {
  const [category, setCategory] = useState([]);
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };
  const [register, setRegister] = useState<RegistrationState>({
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
    category: "",
    group_size: 0,
    privacy_policy_accepted: false,
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      if (register.privacy_policy_accepted === true) {
        console.log(register);
        const response = await axios.post(
          `${BaseUrl}/hackathon/registration`,
          {
            email: register.email,
            phone_number: register.phone_number,
            team_name: register.team_name,
            group_size: register.group_size,
            project_topic: register.project_topic,
            category: register.category,
            privacy_poclicy_accepted: register.privacy_policy_accepted,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          setModal(true);
        }
        console.log("Response:", response.data);
      } else {
        toast.error("All fields are required");
        // alert("All field is reuired");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const getCategory = async () => {
      try {
        const data = await axios.get(`${BaseUrl}/hackathon/categories-list`);
        const result = data;
        setCategory(result?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategory();
  }, []);

  console.log(modal);

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
              <div className="py-2">
                <label htmlFor="name" className="block pb-1">
                  Team's Name
                </label>
                <input
                  required
                  type="text"
                  title="team name"
                  value={register.team_name}
                  placeholder="Enter your team name"
                  onChange={(e) =>
                    setRegister({ ...register, team_name: e.target.value })
                  }
                  className="w-full border px-3 py-2 rounded-sm focus:border-[#FF26B9] focus:outline-none text-white bg-[#1C162F]"
                />
              </div>
              <div className="py-2">
                <label htmlFor="phone" className="block pb-1">
                  Phone
                </label>
                <input
                  required
                  type="tel"
                  title="phone"
                  value={register.phone_number}
                  onChange={(e) =>
                    setRegister({ ...register, phone_number: e.target.value })
                  }
                  placeholder="Enter your phone number"
                  className="w-full border px-3 py-2 rounded-sm focus:border-[#FF26B9] focus:outline-none text-white bg-[#1C162F]"
                />
              </div>
              <div className="py-2">
                <label htmlFor="email" className="block pb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  title="email"
                  value={register.email}
                  onChange={(e) =>
                    setRegister({ ...register, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full border px-3 py-2 rounded-sm focus:border-[#FF26B9] focus:outline-none text-white bg-[#1C162F]"
                />
              </div>
              <div className="py-2">
                <label htmlFor="" className="block pb-1">
                  Project Topic
                </label>
                <input
                  required
                  type="text"
                  title="project topic"
                  value={register.project_topic}
                  onChange={(e) =>
                    setRegister({ ...register, project_topic: e.target.value })
                  }
                  placeholder="What is your group project topic"
                  className="w-full border px-3 py-2 rounded-sm focus:border-[#FF26B9] focus:outline-none text-white bg-[#1C162F]"
                />
              </div>
              <div className="py-2">
                <label htmlFor="category" className="block pb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="border border-[#8a8989] bg-[#1C162F] focus:border-[#FF26B9] focus:outline-none w-full py-2 px-3 rounded-sm"
                  value={register.category}
                  onChange={(e) =>
                    setRegister({ ...register, category: e.target.value })
                  }
                  placeholder="Select your category"
                >
                  {category?.map((categ: { name: string; id: string }) => (
                    <option value={categ.name} key={categ.id}>
                      {categ.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="py-2">
                <label htmlFor="group-size" className="block pb-1">
                  Group Size
                </label>
                <select
                  id="group-size"
                  name="group-size"
                  value={register.group_size}
                  onChange={(e) =>
                    setRegister({
                      ...register,
                      group_size: Number(e.target.value),
                    })
                  }
                  className="border border-[#8a8989] bg-[#1C162F] focus:border-[#FF26B9] focus:outline-none w-full py-2 px-3 rounded-sm"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="text-xs">
              <p className="text-[9px] md:text-xs text-[#FF26B9] leading-6 md:leading-9">
                Please review your registration details before submitting
              </p>
              <label htmlFor="checkbox" className="flex items-center">
                <input
                  required
                  type="checkbox"
                  title="checkbox"
                  className="mr-4"
                  checked={register.privacy_policy_accepted}
                  onChange={(e) =>
                    setRegister({
                      ...register,
                      privacy_policy_accepted: e.target.checked,
                    })
                  }
                />{" "}
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>
            <Button
              title="Register"
              className="mt-4 pt-2 w-full"
              OnClick={handleSubmit}
            />
          </form>
        </div>
      </div>
      {modal && (
        <Modal isOpen={modal} onClose={closeModal}>
          <div className="montserrat text-center">
            <div className="mx-auto">
              <img
                src={success}
                alt="registration success"
                className="object-cover"
              />
            </div>
            <div className="">
              <h1 className="text-lg md:text-2xl leading-7 font-bold">
                Congratulations <br />
                you have successfully Registered!
              </h1>
              <p className="text-xs pb-3">
                Yes, it was easy and you did it! <br />
                check your mail box for next step
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
