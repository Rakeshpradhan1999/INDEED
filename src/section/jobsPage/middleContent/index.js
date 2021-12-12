/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { GrCircleQuestion } from "react-icons/gr";
import { GoChevronRight } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillFlag, AiOutlineSearch } from "react-icons/ai";
import Arrow from "../../../assets/images/arrow.svg";
import Quick from "../../../assets/images/quickIcon.svg";
import { Button } from "../../../components";
import Like from "../../../assets/images/like.svg";

const workDetailList = [
  "Insert machine and product data by inputting text based and numerical information from source documents within time limits",
  "Compile, verify accuracy, and sort information according to priorities to prepare source data for computer entry",
  "Review data for deficiencies or errors, correct any incompatibilities if possible, and check the output",
  "Research and obtain further information for incomplete documents",
  "Apply data program techniques and procedures",
  "Generate reports, store completed work in designated locations, and perform backup operations",
  "Scan documents and print files, when needed",
  "Keep information confidential",
  "Respond to queries for information and access relevant files",
  "Comply with data integrity and security policies",
  "Ensure proper use of office equipment and address any malfunction",
  "Maintain raw material and masterbatch stock and order the same when according to the requirement",
];

const requirement = [
  "Proven data entry work experience, as a Data Entry Operator or Office Clerk",
  "Experience with MS Office and data programs",
  "Familiarity with administrative duties",
  "Experiences using office equipment, like fax machine and scanner",
  "Typing speed and accuracy",
  "Excellent knowledge of correct spelling, grammar, and punctuation",
  "Attention to detail",
];

const searchPillList = [
  "work from home",
  "data entry work from home",
  "work from home part time",
  "data entry",
  "part time",
  "work from home typing",
  "fresher",
  "online typing work from home",
  "work from home female",
  "freshers job vacancy",
];

const MiddleContent = () => {
  return (
    <section className="">
      <div className="container py-8 ">
        <div style={{ maxWidth: 1100 }} className="mx-auto w-full">
          <div className="grid lg:grid-cols-11 gap-10">
            <div className="lg:col-span-5">
              <div className="py-2 px-4">
                <h3 className="mb-3 mt-2 pr-4 pb-4 text-sm border-b border-gray-500 font-bold">
                  {" "}
                  <span className="text-primary-400 hover:underline cursor-pointer">
                    Upload your resume{" "}
                  </span>{" "}
                  <span>- Let employers find you</span>
                </h3>
                <p className="leading-4 mb-3 text-xs pl-1">
                  Online Typing jobs
                </p>
                <div className="px-1 flex justify-between items-center">
                  <p className="text-sm ">
                    Sort by: <b>relevance</b> -{" "}
                    <span className="text-primary-400 hover:underline">
                      date
                    </span>
                  </p>
                  <p className="text-xs flex items-center">
                    Page 1 of 164 jobs{" "}
                    <span className="ml-2">
                      <GrCircleQuestion />
                    </span>
                  </p>
                </div>
              </div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((v, i) => (
                <JobCard key={i} />
              ))}
              <div className="border-2 border-gray-500 p-4 rounded-lg mt-4">
                <p className="font-bold text-base pb-2">
                  Overall, how relevant are these jobs?
                </p>
                <div className="flex items-center justify-between p-4">
                  {[
                    <Emoji1 />,
                    <Emoji2 />,
                    <Emoji3 />,
                    <Emoji4 />,
                    <Emoji5 />,
                  ].map((v, i) => (
                    <button key={i} className=" cursor-pointer">
                      {v}
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <p>Not at all</p>
                  <p>Extremely</p>
                </div>
              </div>
              <div className=" flex justify-center mt-8">
                <PaginateBtn text="1" active />
                <PaginateBtn text="2" />
                <PaginateBtn text="3" />
                <PaginateBtn text="4" />
                <PaginateBtn text="5" />
                <PaginateBtn text={<GoChevronRight />} />
              </div>
              <div className="flex flex-wrap mt-14">
                {searchPillList.map((v, i) => (
                  <SearchPills text={v} key={i} />
                ))}
              </div>
            </div>
            <div className="col-span-6 relative hidden lg:block">
              <div className="sticky top-0 left-0 ">
                <div className="border-2 border-gray-500 rounded-lg py-4 pt-6">
                  <div className="float-right-content px-4">
                    <h6 className="font-bold  text-lg mb-1">
                      Data Entry Operator
                    </h6>
                    <p className="text-sm">SHRI PLASTO PACKERS PVT.LTD.</p>
                    <p className="text-sm">
                      Gummidipoondi, Chennai, Tamil Nadu
                    </p>
                    <p className="text-sm">₹12,000 - ₹15,000 a month</p>
                    <img src={Quick} alt="" className="mt-2" />
                    <p className="text-xs">
                      Responded to 51-74% of applications in the past 30 days,
                      typically within 6 days.
                    </p>
                    <div className="pt-2.5 flex items-center">
                      <Button
                        style={{
                          paddingRight: "24px",
                          paddingLeft: "24px",
                          fontSize: "16px",
                        }}
                      >
                        Apply Now
                      </Button>
                      <div className="ml-8  py-2 px-2 rounded-lg bg-gray-400">
                        <img src={Like} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className=" overflow-y-auto  h-96">
                    <div className="p-4 pb-0">
                      <p className="text-small mb-2">
                        We are looking for a Data Entry Operator to update and
                        maintain information on our company databases and
                        computer systems.
                      </p>
                      <p className="text-small">
                        Data Entry Operator responsibilities include collecting
                        and entering data in databases and maintaining accurate
                        records of valuable company information. Our ideal
                        candidate has essential data entry skills, like fast
                        typing with an eye for detail and familiarity with
                        spreadsheets and online forms.
                      </p>
                      <ul className="list-disc pl-10 mt-4">
                        {workDetailList.map((v, i) => (
                          <li key={i} className="text-small">
                            {v}
                          </li>
                        ))}
                      </ul>
                      <p className="text-small my-2">Requirements</p>
                      <ul className="list-disc pl-10 mt-4">
                        {requirement.map((v, i) => (
                          <li key={i} className="text-small">
                            {v}
                          </li>
                        ))}
                      </ul>
                      <p className="text-small my-1">
                        Expected Start Date: 20/12/2021
                      </p>
                      <p className="text-small my-2">Job Type: Full-time</p>
                      <p className="text-small my-2">
                        Salary: ₹12,000.00 - ₹15,000.00 per month
                      </p>
                      <p className="text-small my-2">Benefits:</p>
                      <ul className="list-disc pl-10 mt-4">
                        <li className="text-small">Life insurance</li>
                      </ul>
                      <p className="text-small my-2">Schedule:</p>
                      <ul className="list-disc pl-10 mt-4">
                        <li className="text-small">Day shift</li>
                      </ul>
                      <p className="text-small my-2">Experience:</p>
                      <ul className="list-disc pl-10 mt-4">
                        <li className="text-small">
                          Microsoft Office/Google spreadsheets: 1 year
                          (Required)
                        </li>
                        <li className="text-small">
                          Data entry: 2 years (Preferred)
                        </li>
                      </ul>
                      <p className="text-small my-2">Work Remotely:</p>
                      <ul className="list-disc pl-10 mt-4">
                        <li className="text-small">No</li>
                      </ul>
                      <p className="text-small  my-2">2 days ago</p>
                      <button className="bg-gray-400 text-base py-3 px-5 rounded-lg font-bold flex items-center">
                        <span className="text-xl inline-block mr-1">
                          <AiFillFlag />
                        </span>
                        <span>Report Job</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleContent;

const JobCard = ({ ...props }) => (
  <div
    {...props}
    className="border-2 border-gray-500 p-4 rounded-lg relative mt-4"
  >
    <div className="card-dots cursor-pointer">
      <BsThreeDotsVertical />
    </div>
    <p className="text-xs pb-1 mr-2">new</p>
    <a href="#" className="font-bold  text-lg">
      Data Entry Operator
    </a>
    <p className="leading-6 text-base">SHRI PLASTO PACKERS PVT.LTD.</p>
    <p className=" leading-5 text-base pb-3">
      Gummidipoondi, Chennai, Tamil Nadu
    </p>
    <p className="font-bold text-sm pb-3"> ₹12,000 - ₹15,000 a month</p>
    <p className="flex items-center text-sm pr-4 pb-2">
      <img src={Arrow} alt="" />
      <span className="ml-1 inline-block ">
        Apply securely with Indeed Resume
      </span>
    </p>
    <p className="flex items-center text-sm pr-4 pb-2">
      <img src={Quick} alt="" />
      <span className="ml-1 inline-block ">Responsive employer</span>
    </p>
    <ul className="pl-5 text-sm pr-10 pt-2" style={{ listStyleType: "circle" }}>
      <li>
        Our ideal candidate has essential data entry skills, like fast{" "}
        <b>typing</b> with an eye for detail and familiarity with spreadsheets
        and <b>online</b> forms.
      </li>
    </ul>
    <div>
      <span className="text-xs text-gray-500 mt-4 inline-block ">
        2 days ago
      </span>
      <span className="ml-4 inline-block text-xs">More...</span>
    </div>
  </div>
);

const PaginateBtn = ({ text, active = false }) => (
  <div
    className={`w-10 h-10 rounded-lg mr-3 mb-2 cursor-pointer ${
      active ? "bg-gray-800 text-white font-bold" : "bg-gray-400"
    }  text-lg flex justify-center items-center `}
  >
    {text}
  </div>
);

const SearchPills = ({ text = "work from home", ...props }) => (
  <a
    href="#"
    {...props}
    className="flex items-center bg-gray-400 p-2 mr-2 mb-2 pr-3 rounded-lg"
  >
    <span className="mr-1.5">
      <AiOutlineSearch />
    </span>
    <b>{text}</b>
  </a>
);

const Emoji1 = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // sx="[object Object]"
    class="css-1enmrf8 eu4oa1w0"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
      fill="#2D2D2D"
    ></path>
    <path
      d="M10 9.423a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM17 9.423a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 13.923c2.559 0 4.669 1.602 4.965 3.668.039.273-.189.499-.465.499h-9c-.276 0-.504-.226-.465-.499.296-2.066 2.406-3.668 4.965-3.668z"
      fill="#2D2D2D"
    ></path>
  </svg>
);
const Emoji2 = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx="[object Object]"
    class="css-1enmrf8 eu4oa1w0"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
      fill="#2D2D2D"
    ></path>
    <path
      d="M12 15.923c-.91 0-1.694.278-2.228.679-.342.256-.562.543-.677.833-.1.257-.319.488-.595.488h-1c-.276 0-.504-.225-.462-.498.151-.995.748-1.834 1.534-2.423.913-.685 2.128-1.079 3.428-1.079 1.3 0 2.515.394 3.428 1.079.786.589 1.383 1.428 1.534 2.423.042.273-.186.498-.462.498h-1c-.276 0-.494-.23-.595-.488-.115-.29-.335-.577-.676-.833-.535-.401-1.32-.679-2.229-.679zM10 9.423a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM17 9.423a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      fill="#2D2D2D"
    ></path>
  </svg>
);
const Emoji3 = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx="[object Object]"
    class="css-1enmrf8 eu4oa1w0"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 11.867c.073 6.627-5.24 12.059-11.867 12.132C5.506 24.073.074 18.76 0 12.133-.073 5.506 5.24.074 11.867 0 18.494-.073 23.926 5.24 24 11.867zm-2 .022c.06 5.523-4.367 10.05-9.89 10.11-5.522.062-10.048-4.366-10.11-9.888C1.94 6.588 6.368 2.06 11.89 2 17.411 1.94 21.937 6.367 22 11.889z"
      fill="#2D2D2D"
    ></path>
    <path
      d="M9.972 9.445a1.5 1.5 0 11-3 .034 1.5 1.5 0 013-.034zM16.972 9.368a1.5 1.5 0 11-3 .033 1.5 1.5 0 013-.033zM8.868 17.594h6v-2h-6v2z"
      fill="#2D2D2D"
    ></path>
  </svg>
);
const Emoji4 = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx="[object Object]"
    class="css-1enmrf8 eu4oa1w0"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
      fill="#2D2D2D"
    ></path>
    <path
      d="M12 15.923c-.91 0-1.694-.277-2.228-.679-.342-.256-.562-.543-.677-.833-.101-.257-.319-.488-.595-.488h-1c-.276 0-.504.225-.462.498.151.996.748 1.834 1.534 2.423.913.685 2.128 1.08 3.428 1.08 1.3 0 2.515-.395 3.428-1.08.786-.589 1.383-1.427 1.534-2.423.042-.273-.186-.498-.462-.498h-1c-.276 0-.494.231-.595.488-.115.29-.335.577-.677.833-.534.402-1.319.68-2.228.68zM10 9.423a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM17 9.423a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      fill="#2D2D2D"
    ></path>
  </svg>
);
const Emoji5 = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx="[object Object]"
    class="css-1enmrf8 eu4oa1w0"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
      fill="#2D2D2D"
    ></path>
    <path
      d="M10 9.423a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM17 9.423a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 18.09c2.559 0 4.669-1.602 4.965-3.668.039-.274-.189-.499-.465-.499h-9c-.276 0-.504.225-.465.499.296 2.066 2.406 3.668 4.965 3.668z"
      fill="#2D2D2D"
    ></path>
  </svg>
);
