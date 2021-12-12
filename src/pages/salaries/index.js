import "./style.css";
import {
  TopSearchSection,
  TopPayingJobsSection,
  TopPayingCompaniesSection,
  Estimate,
  PreFooter,
  Footer,
} from "../../section/salaryPage";
const Salaries = () => {
  return (
    <div>
      <TopSearchSection />
      <TopPayingJobsSection />
      <TopPayingCompaniesSection />
      <Estimate />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Salaries;
