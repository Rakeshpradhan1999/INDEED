/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button } from "../../../components";
import Image from "../../../assets/images/estimate.svg";
import Image2 from "../../../assets/images/estimate2.svg";
const Estimate = () => {
  return (
    <section className="my-10">
      <div className="container">
        <div className="py-8 px-6 border border-gray-500 rounded-lg grid md:grid-cols-2">
          <div>
            <h2 className="font-bold text-2xl lg:text-3xl mb-3">
              How much should you be earning?
            </h2>
            <p className="text-gray-600 text-base">
              Get an estimated calculation of how much you should be earning and
              insight into your career options.
            </p>
            <img src={Image2} className="md:hidden mx-auto" alt="" />
            <div className="estimate-btn pt-8 flex flex-col md:flex-row  items-center">
              <Button>Get estimate pay range</Button>
              <a
                href="#"
                className="text-primary-500 underline mt-4 md:mt-0 ml-4 text-base"
              >
                See Details More
              </a>
            </div>
          </div>
          <div className="md:pl-20 hidden md:block">
            <img src={Image} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimate;
