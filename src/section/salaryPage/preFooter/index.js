const list = [
  "Security Guard",
  "Architect",
  "Electrician",
  "Software Engineer",
  "Nurse",
  "School Principal",
  "Accountant",
  "Police Officer",
  "Digital Marketer",
  "Teacher",
  "Bus Driver",
  "Data Scientist ",
  "Data Entry Clerk",
  "Registered Nurse",
  "Flight Attendant  ",
  "Driver",
  "Medical Officer",
  "Lawyer",
  "Computer Operator",
  "Graphic Designer",
  "Housekeeper",
  "Laboratory Technician",
  "School Teacher",
  "Data Analyst",
  "High School Teacher",
  "CNC Operator",
  "Sales Executive",
  "Pharmacist",
  "Full Stack Developer",
  "Web Developer",
  "Mechanical Engineer",
  "Medical Representative ",
  "Lecturer",
  "Counselor",
  "Electrical Engineer",
  "Veterinarian",
  "Assistant Professor",
  "Office Assistant",
  "Python Developer",
  "Civil Engineer",
  "Physiotherapist",
  "Radiologist",
  "Back Office Executive",
  "Computer Engineer",
  "Front End Developer ",
];

const PreFooter = () => {
  return (
    <div className="bg-gray-700 mt-14 text-black">
      <div className="container py-9">
        <div className="grid  md:grid-cols-12">
          <div className="md:col-span-4 ">
            <h6 className="text-2xl font-bold">Frequently searched careers</h6>
          </div>
          <div className="md:col-span-8 grid  md:grid-cols-3 mt-10 md:mt-0">
            {list.map((v, i) => (
              <p key={i} className="text-sm leading-5 mb-3">
                {v}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
