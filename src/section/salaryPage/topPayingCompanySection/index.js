/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaChevronDown } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import Tcs from "../../../assets/images/tcs.jpg";
import Dxc from "../../../assets/images/dxc.jpg";
import gas from "../../../assets/images/gas.jpg";
import Ibm from "../../../assets/images/Ibm.jpg";
import Swiggy from "../../../assets/images/swiggy.jpg";
import Cogni from "../../../assets/images/cogni.jpg";
import accenture from "../../../assets/images/accenture.jpg";
import Tele from "../../../assets/images/telep.jpg";
const cardList = [
  {
    title: "Tata Consultancy Serv...",
    image: Tcs,
  },
  {
    title: "DXC Technology",
    image: Dxc,
  },
  {
    title: "Gas",
    image: gas,
  },
  {
    title: "Accenture",
    image: accenture,
  },
  {
    title: "Cognizant Technology...",
    image: Cogni,
  },
  {
    title: "Ride.Swiggy",
    image: Swiggy,
  },
  {
    title: "Teleperformance",
    image: Tele,
  },
  {
    title: "IBM",
    image: Ibm,
  },
];

const TopPayingCompaniesSection = () => {
  return (
    <section className="bg-white sm:px-6 py-10">
      <div className="container">
        <div>
          <h2 className="font-bold text-2xl md:text-3xl text-dark">
            Browse top paying companies by industry
          </h2>
          <DropDown />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {cardList.map((card, i) => (
              <Card key={i} title={card.title} image={card.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPayingCompaniesSection;

const DropDown = () => (
  <div className="dropdown-box flex items-center justify-between mt-4 py-3 pl-6 pr-4 cursor-pointer">
    <a
      href="#"
      className="text-primary-400 underline hover:no-underline text-sm leading-6"
    >
      Choose an industry
    </a>
    <span>
      <FaChevronDown />
    </span>
  </div>
);

const Card = ({ title, image, ...props }) => (
  <div
    className="industries-card border border-gray-500 p-4 pr-2 rounded-lg flex items-center"
    {...props}
  >
    <div className="w-14 border border-gray-500 mr-2">
      <img src={image} alt="" />
    </div>
    <div className="flex items-center justify-between flex-1">
      <div>
        <h6 className="font-bold text-base mb-2 text-black underline hover:no-underline">
          {title}
        </h6>
        <div className="flex">
          <div className="flex text-sm text-gray-600 mr-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p className="text-xs text-gray-600 underline hover:no-underline">
            19k reviews
          </p>
        </div>
      </div>
      <div className="text-xl text-black">
        <BiChevronRight />
      </div>
    </div>
  </div>
);
