import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const pillList = [
  "Government",
  "Online Typing",
  "Work From Home",
  "Bank",
  "Delivery Executive",
  "Healthcare",
  "Online Tutoring",
  "Police",
  "Nursing",
  "NGO",
];

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

const PopularSearchSection = () => {
  return (
    <section className="border-t-2 border-gray-400  pt-12 pb-8">
      <div className="">
        <h2 className="text-center text-2xl font-bold">Popular searches</h2>
        <div className="search-pill-boxs-wrapper flex sm:justify-center mt-4 flex-wrap px-4">
          {pillList.map((item, i) => (
            <Pill text={item} key={i} />
          ))}
        </div>
        <div className="mt-16 mb-10  text-center">
          <p className="text-sm">
            Indeed{" "}
            <span className="text-primary-400 hover:underline cursor-pointer">
              हिंदी{" "}
            </span>
            में भी ऑफ़र करता है
          </p>
        </div>
        <div className="px-4 flex justify-between flex-wrap">
          <ul className="flex items-center mb-6 flex-wrap">
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
      </div>
    </section>
  );
};

export default PopularSearchSection;

const Pill = ({ text, ...props }) => (
  <Link
    {...props}
    to="/jobs"
    className="flex items-center px-3 bg-gray-400 hover:bg-gray-500 py-3.5 rounded-lg mb-3 mr-2"
  >
    <span className="pill-icon">
      <FiSearch />
    </span>{" "}
    <span className=" text-sm">{text}</span>
  </Link>
);
