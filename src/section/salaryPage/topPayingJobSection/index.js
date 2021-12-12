/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaChevronDown } from "react-icons/fa";

const cardList = [
  {
    title: "Human Resources Specialist",
    price: "2,16,554",
  },
  {
    title: "Accountant",
    price: "3,16,554",
  },
  {
    title: "Computer Operator",
    price: "4,66,554",
  },
  {
    title: "Customer Care Specialist",
    price: "3,22,554",
  },
  {
    title: "Office Assistant",
    price: "5,27,554",
  },
  {
    title: "Back Office Executive",
    price: "2,23,554",
  },
  {
    title: "Data Entry Clerk",
    price: "1,22,554",
  },
  {
    title: "Digital Marketer",
    price: "7,22,554",
  },
];

const TopPayingJobsSection = () => {
  return (
    <section className="bg-white sm:px-6  py-10">
      <div className="container">
        <div>
          <h2 className="font-bold text-2xl md:text-3xl text-dark">
            Browse top paying jobs by industry
          </h2>
          <DropDown />
          <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {cardList.map((card, i) => (
              <Card key={i} title={card.title} price={card.price} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPayingJobsSection;

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

const Card = ({ title, price, ...props }) => (
  <div
    className="industries-card border border-gray-500 py-4 rounded-lg"
    {...props}
  >
    <div className="px-4 pb-4">
      <h3 className="font-bold  text-base mb-2 underline hover:no-underline cursor-pointer">
        {title}
      </h3>
      <div className="flex items-center justify-between text-sm">
        <p className="underline hover:no-underline cursor-pointer">
          Average Salary
        </p>
        <p className="font-bold underline hover:no-underline cursor-pointer">
          ₹{price} per year
        </p>
      </div>
    </div>
    <div className="px-4 pt-4 border-t border-gray-500 ">
      <a href="#" className="text-primary-500 text-sm underline">
        Job Openings
      </a>
    </div>
  </div>
);
