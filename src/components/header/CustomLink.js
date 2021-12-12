import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className={` border-b-2  ${
        match ? "border-primary-400" : "border-transparent"
      } pt-4 pb-6 mr-6 inline-block mt-4 text-sm hover:border-primary-400`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
