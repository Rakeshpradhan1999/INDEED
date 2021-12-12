import { HiSearch } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { Button } from "../../../components";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

const pillList = [
  "Data Posted",
  "Remote",
  "Salary Estimate",
  "Job Type",
  "Education Level",
  "Location",
  "Job Language",
];

const TopSearch = () => {
  return (
    <div className="border-b border-gray ">
      <div className="container py-8 ">
        <div style={{ maxWidth: 1100 }} className="mx-auto w-full ">
          <div className="lg:flex items-center mb-6 hidden ">
            <Input
              text="What"
              placeholder="Job title, Keywords, or company"
              icon={<HiSearch />}
            />
            <Input
              text="Where"
              placeholder="City, State, or pin code"
              icon={<IoLocationSharp />}
            />
            <Button>Find jobs</Button>
            <Link to="/" className="text-gray-600 hover:underline text-xs ml-4">
              Advanced Job Search
            </Link>
          </div>
          <MobileInput />
          <div>
            <div className="flex   items-center overflow-auto">
              {pillList.map((v, i) => (
                <PillBox text={v} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSearch;

const Input = ({ text, placeholder, icon }) => (
  <div className="input-wrapper">
    <p className="mr-4 whitespace-nowrap font-bold">{text}</p>
    <input
      type="text"
      className="focus:outline-none text-sm"
      placeholder={placeholder}
    />
    <div>{icon}</div>
  </div>
);
const MobileInput = () => (
  <div className="lg:hidden flex bg-white  mb-4 mobile-input  ">
    <div className="flex py-3 px-2 items-center border-b border-gray-500">
      <span className="mr-2">
        <HiSearch />
      </span>
      <input
        className="flex-1 focus:outline-none"
        type="text"
        placeholder="Job title, Keywords, or company"
      />
    </div>
    <div className="flex py-3 px-2 items-center">
      <span className="mr-2">
        <IoLocationSharp />
      </span>
      <input
        className="flex-1 focus:outline-none"
        type="text"
        placeholder="City, State, or pin code"
      />
    </div>
  </div>
);

const PillBox = ({ text, ...props }) => (
  <div
    {...props}
    className="flex flex-shrink-0 text-xs bg-gray-400  cursor-pointer  items-center leading-5 py-3 px-5 rounded-lg mr-2 mb-2"
  >
    <p>{text}</p>
    <span className="inline-block ml-2">
      <AiFillCaretDown />
    </span>
  </div>
);
