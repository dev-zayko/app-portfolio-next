import Link from "next/link";
const NavItem = ({ name, path, active }: any) => {
  return (
    <>
      <Link
      href={path}
        className={`font-semibold text-xl ${active === true ? "text-purple-500" : "text-white-700"}`}
      >
      {active === true ? ">" : ""}{name}
      </Link>
    </>
  );
};

export default NavItem;
