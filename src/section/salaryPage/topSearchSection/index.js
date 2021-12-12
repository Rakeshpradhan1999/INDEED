import { HiSearch } from "react-icons/hi";
import { Button } from "../../../components";
import Image from "../../../assets/images/salary-page-top-image.png";
const TopSearchSection = () => {
  return (
    <section className="bg-blue-400 sm:px-6 py-10 salary-top-search">
      <div className="container">
        <div>
          <div className="mb-10 relative z-10">
            <h1 className="px-2 font-bold md:text-xl text-3xl mb-2">
              Find a career you'll love
            </h1>
            <p className="text-xs md:text-sm leading-6 mb-4 px-2">
              Explore which careers have the highest job satisfaction, best
              salaries, and more
            </p>
          </div>
          <div className="salaries-search-Box p-6 pb-4 bg-white  lg:w-min flex flex-col w-full lg:flex-row items-center">
            <div className="lg:mr-4 w-full lg:w-auto">
              <span className="font-bold text-base leading-6 pl-1 pb-1 hidden lg:block">
                What
              </span>
              <div className="salaries-search-wrapper flex items-center mb-6 w-full">
                <span className="font-bold text-base leading-6 pl-1 pb-1 lg:hidden">
                  What
                </span>
                <input
                  type="text"
                  placeholder="job title"
                  className="focus:outline-none flex-1 ml-4 lg:ml-0"
                />
                <span>
                  <HiSearch />
                </span>
              </div>
            </div>
            <div className="lg:mr-4 w-full lg:w-auto">
              <span className="font-bold text-base leading-6 pl-1 pb-1  hidden lg:block">
                Where
              </span>
              <div className="salaries-search-wrapper flex items-center mb-6">
                <span className="font-bold text-base leading-6 pl-1 pb-1  lg:hidden ">
                  Where
                </span>
                <input
                  type="text"
                  defaultValue="India"
                  className="focus:outline-none flex-1 ml-5"
                />
              </div>
            </div>
            <div className="lg:ml-4 w-full lg:w-auto">
              <Button style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="top-image">
        <img src={Image} alt="" />
      </div>
    </section>
  );
};

export default TopSearchSection;
