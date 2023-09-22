import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UseContextGlobal } from "../../hooks/Context";
import { Button } from "../../utils/Button";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MobileNavbar: React.FC = () => {
  const { toggle, handleChange } = UseContextGlobal();
  const navigate = useNavigate()

  return (
    <div>
      <div
        className={`${
          toggle ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 h-full w-[85%] bg-[#150E28] p-4 transition-transform transform`}
      >
        <div className="flex justify-end" onClick={handleChange}>
          <AiOutlineCloseCircle className="text-2xl text-[#FF26B9] cursor-pointer" />
        </div>
        <ul className="mt-5">
          {navItems.map((item) => (
            <li key={item.id} className="py-5">
              <NavLink to={item.path} className="font-[Montserrat]" onClick={handleChange}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Button title="Register" className="montserrat" OnClick={()=>navigate('/register')} />
      </div>
    </div>
  );
};

export default MobileNavbar;

const navItems = [
  {
    id: "1",
    name: "Timeline",
    path: "/",
  },
  {
    id: "2",
    name: "Overview",
    path: "/overview",
  },
  {
    id: "3",
    name: "FAQs",
    path: "/faqs",
  },
  {
    id: "4",
    name: "Contact",
    path: "/contact",
  },
];
