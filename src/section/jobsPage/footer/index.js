import React from "react";
import { Button } from "../../../components";
import { Link } from "react-router-dom";
const footerLinks1 = [
  "Career Advise",
  "Browse Jobs",
  "Browse Companies",
  "Salaries",
  "Indeed Events",
  "Work at Indeed",
  "Countries",
  "About",
  "Help Center",
];
const footerLinks2 = [
  {
    link: false,
    text: "© 2021 Indeed",
  },
  {
    link: true,
    text: "Accessibility at Indeed",
  },
  {
    link: true,
    text: "Privacy Center",
  },
  {
    link: true,
    text: "Cookies",
  },
  {
    link: true,
    text: "Privacy",
  },
  {
    link: true,
    text: "Terms",
  },
];
const JobsFooter = () => {
  return (
    <div>
      <div className="px-4 flex justify-between flex-wrap">
        <ul className=" items-center mb-6 hidden md:flex">
          {footerLinks1.map((v, i) => (
            <li key={i} className="mr-6">
              <Link to="/" className="text-sm hover:underline">
                {v}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center flex-wrap">
          {footerLinks2.map((v, i) => (
            <li key={i} className="mr-6">
              {v.link ? (
                <Link to="/" className="text-sm hover:underline">
                  {v.text}
                </Link>
              ) : (
                <p className="text-sm">{v.text}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
      <footer className="px-4 text-center pt-3 pb-8 bg-gray-600 mt-8 hidden md:block">
        <div className="flex flex-col items-center justify-center">
          <h6 className="font-bold text-lg mb-2">Let employers find you</h6>
          <Button>Upload your resume</Button>
        </div>
      </footer>
    </div>
  );
};

export default JobsFooter;
