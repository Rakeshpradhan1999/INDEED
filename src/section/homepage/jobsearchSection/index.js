import { HiSearch } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { Button } from "../../../components";
import { Link } from "react-router-dom";

const JobSearchSection = () => {
  return (
    <section>
      <div className="container pt-14 pb-4">
        <form action="">
          <div className="md:mx-20 lg:mx-0 flex flex-col mx-0 lg:flex-row justify-center">
            <p className="whitespace-nowrap font-bold  lg:hidden">What</p>
            <Input
              text="What"
              placeholder="Job title, Keywords, or company"
              icon={<HiSearch />}
            />
            <p className="whitespace-nowrap font-bold  lg:hidden">Where</p>
            <Input
              text="Where"
              placeholder="City, State, or pin code"
              icon={<IoLocationSharp />}
            />
            <Button>Find jobs</Button>
          </div>
        </form>
        <div className="flex justify-center mt-6">
          <div>
            <SearchBottomLink
              text=" -It only takes a few seconds"
              link="Post your resume "
              to="/"
            />
            <SearchBottomLink
              text="-Your next hire is here"
              link="Employers: Post a job "
              to="/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchSection;

const Input = ({ text, placeholder, icon }) => (
  <div className=" input-wrapper mb-5 lg:mb-0">
    <p className="mr-4 whitespace-nowrap font-bold hidden lg:block">{text}</p>
    <input
      type="text"
      className="focus:outline-none text-sm"
      placeholder={placeholder}
    />
    <div>{icon}</div>
  </div>
);

const SearchBottomLink = ({ text, link, to }) => (
  <div className="flex justify-center items-center pb-5">
    <Link
      to={to}
      className="text-primary-400 font-bold inline-block pr-1 text-base hover:underline"
    >
      {link}
    </Link>
    <p> {text}</p>
  </div>
);
