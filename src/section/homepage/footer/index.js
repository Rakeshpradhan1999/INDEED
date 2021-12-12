import { Button } from "../../../components";
const Footer = () => {
  return (
    <footer className="px-4 text-center pt-3 pb-8 bg-gray-600">
      <div className="flex flex-col items-center justify-center">
        <h6 className="font-bold text-lg mb-2">Let employers find you</h6>
        <Button>Upload your resume</Button>
      </div>
    </footer>
  );
};

export default Footer;
