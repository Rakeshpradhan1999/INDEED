/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Logo from "./Logo";
import CustomLink from "./CustomLink";
import { Link } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { GoChevronRight } from "react-icons/go";
import Button from "../button";
import "./style.css";
const list = [
  {
    text: "Find jobs",
    to: "/",
  },
  {
    text: "Company reviews",
    to: "companies",
  },
  {
    text: "Salary Search",
    to: "salaries",
  },
];

const Header = () => {
  const [active, setActive] = useState(false);
  const menuHandler = () => {
    setActive((prev) => !prev);
  };
  return (
    <>
      <header className="border-b border-gray  flex items-center lg:items-end justify-between">
        <div className="flex items-end">
          <div className="py-5 pb-7 px-6">
            <Logo />
          </div>
          <ul className="lg:flex hidden ">
            {list.map((item, i) => (
              <li key={i}>
                <CustomLink to={item.to}>{item.text}</CustomLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex items-center ">
          <Link
            className="pt-4 pb-6 mr-6 inline-block mt-2 text-sm border-b-2  hover:border-primary-400 border-transparent"
            to="resume"
          >
            Post your resume
          </Link>
          <Link
            className="pt-4 pb-6 mr-6 inline-block mt-2 text-sm font-bold text-primary-400 border-transparent  border-b-2  hover:border-primary-400"
            to="resume"
          >
            Sign in
          </Link>
          <div className="flex items-center">
            <div className="divider"></div>
            <Link
              className="pt-4 pb-6 mx-6 inline-block mt-2 text-sm border-b-2  hover:border-primary-400 border-transparent"
              to="employer"
            >
              Employers / Post Job
            </Link>
          </div>
        </div>
        <div className="px-4 flex  items-center lg:hidden">
          <Button style={{ padding: "0.4rem 1rem" }}>
            <span className="flex items-center text-lg">
              <FaUser />
              <span className="font-bold text-sm ml-2">Sign in</span>
            </span>
          </Button>
          <button className="text-lg ml-4" onClick={menuHandler}>
            <FaBars />
          </button>
        </div>
      </header>
      <MobileMenu active={active} handler={menuHandler} />
    </>
  );
};

export default Header;

const menulist = [
  "Find Jobs",
  "Company reviews",
  "Company Salaries",
  "Employers",
];

const menulist2 = ["Create Resume", "Change country", "Help Center"];

const MobileMenu = ({ active, handler }) => (
  <div
    className={` mobile-menu transition-all duration-300 ease-linear fixed top-0 ${
      active ? "right-0" : "-right-full"
    }   h-full max-w-md bg-white w-full shadow-lg`}
  >
    <div className="flex justify-end">
      <button className="text-2xl m-5" onClick={handler}>
        <CgClose />
      </button>
    </div>
    <div className="">
      <ul>
        {menulist.map((v, i) => (
          <li>
            <a
              href="#"
              className="flex justify-between items-center border-b-2 border-gray-500 py-4 px-4"
            >
              <span className="font-bold text-base">{v}</span>
              <span className="text-xl">
                <GoChevronRight />
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="menu-divider"></div>
      <ul>
        {menulist2.map((v, i) => (
          <li>
            <a
              href="#"
              className="flex justify-between items-center border-b-2 border-gray-500 py-4 px-4"
            >
              <span className="font-bold text-base">{v}</span>
              <span className="text-xl">
                <GoChevronRight />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
