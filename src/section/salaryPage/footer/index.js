/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../../assets/images/indeed-white.svg";
import { FaTwitter } from "react-icons/fa";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const links = [
  "Career Explorer",
  "Browse Companies",
  "Work at Indeed",
  "Career Advice",
  "Salaries",
  "Countries",
  "Browse Jobs",
  "Indeed Events",
  "About",
];

const social = [
  <FaTwitter />,
  <AiFillFacebook />,
  <AiOutlineInstagram />,
  <AiFillYoutube />,
];

const Footer = () => {
  return (
    <footer className="bg-black py-14 text-white">
      <div className="container">
        <div className="grid gap-y-10 md:gap-y-0 md:grid-cols-10">
          <div className="col-span-3">
            <img src={Logo} alt="" />
          </div>
          <div className="col-span-5">
            <h6 className="font-bold pt-1 pb-4 text-xl">Explore Indeed</h6>
            <div className="grid sm:grid-cols-3">
              {links.map((v, i) => (
                <a
                  href="#"
                  key={i}
                  className="text-sm leading-6 pb-2 hover:text-primary-500 hover:underline"
                >
                  {v}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="font-bold pt-1 pb-4 text-xl">Follow us</h3>
            <div className="grid grid-cols-4 md:pr-10">
              {social.map((v, i) => (
                <a href="#" key={i} className="mb-4 text-xl">
                  {v}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm">
            © 2021 Indeed -{" "}
            <a
              href="#"
              className="hover:text-primary-500 text-sm hover:underline px-1"
            >
              Accessibility at Indeed
            </a>
            -{" "}
            <a
              href="#"
              className="hover:text-primary-500 text-sm hover:underline px-1"
            >
              Privacy Center
            </a>
            -
            <a
              href="#"
              className="hover:text-primary-500 text-sm hover:underline px-1"
            >
              Cookies
            </a>
            -
            <a
              href="#"
              className="hover:text-primary-500 text-sm hover:underline px-1"
            >
              Privacy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
