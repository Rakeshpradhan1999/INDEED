import {
  JobSearchSection,
  PopularSearchSection,
  Footer,
} from "../../section/homepage";
import "./style.css";

const Home = () => {
  return (
    <div>
      <JobSearchSection />
      <PopularSearchSection />
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
