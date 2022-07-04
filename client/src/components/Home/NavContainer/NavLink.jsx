const NavLink = ({ name, IconName }) => {
  const navLinkClass =
    "flex items-center hover:bg-gray-300 p-[1.1rem] hover:cursor-pointer border-l-[3px] border-l-white hover:border-l-cyan-800 text-neutral-400 hover:text-cyan-900 border-b-[1.5px] hover:border-b-gray-300 hover:font-bold";

  return (
    <li className={navLinkClass}>
      <IconName
        size={"1.7rem"}
        onMouseOver={({ target }) => (target.style.color = "text-cyan-900")}
        onMouseOut={({ target }) => (target.style.color = "text-neutral-400")}
      />
      <p className={`ml-[0.7rem] text-[1rem] poppinsText`}>{name}</p>
    </li>
  );
};

export default NavLink;
