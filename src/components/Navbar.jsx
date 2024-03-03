import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { CgPushChevronRight, CgPushChevronLeft } from "react-icons/cg";
import { IoCloseSharp, IoPeople, IoMail } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navBar, setnavBar] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  function toggleNavBar() {
    return setnavBar(!navBar);
  }
  function toggleMenu() {
    return setShowMenu(!showMenu);
  }

  const quickLinks = [
    {
      id: "btugeio",
      icon: <MdOutlineDashboardCustomize />,
      name: "Overview",
      path: "/overview",
    },
    {
      id: "sdfsdfc",
      icon: <IoPeople />,
      name: "People",
      path: "/people",
    },
    {
      id: "pubdfvjk",
      icon: <IoMail />,
      name: "Mail",
      path: "/mail",
    },
    {
      id: "uyrtsc",
      icon: <LuListTodo />,
      name: "Tasks",
      path: "/tasks",
    },
  ];

  return (
    <>
      <div className=" relative flex md:hidden bg-primary w-full items-center justify-between p-2 transition-all">
        <h1 className="md:hidden text-2xl font-semibold">Logo</h1>
        <div onClick={toggleMenu} className="icon-style md:hidden">
          {showMenu ? <IoCloseSharp /> : <BiMenuAltRight />}
        </div>
      </div>
      {navBar ? (
        <div className="hidden md:flex flex-col gap-6 md:w-1/4 lg:w-[12%] bg-secondry h-full transition-all">
          <div className="flex items-center justify-between py-6 px-4">
            <h1 className="text-2xl font-semibold">Logo</h1>
            <div
              data-title="Collapse"
              onClick={toggleNavBar}
              className="text-xl p-4 cursor-pointer abbreviation"
            >
              <CgPushChevronLeft />
            </div>
          </div>

          <div className="flex flex-col gap-4 w-5/6 my-0 mx-auto items-start">
            {quickLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  to={link.path}
                  className="flex gap-2 items-center py-2 px-4 hover:bg-primary hover:text-[white] font-semibold hover:only:bg-[white] *:hover:bg-[white] *:hover:text-primary hover:only:text-[black] w-full rounded-xl transition-all"
                >
                  <span className="icon-style bg-primary text-[white]">
                    {link.icon}
                  </span>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="w-16 h-full pt-6 hidden bg-secondry md:flex flex-col items-center gap-10 transition-all">
          <div
            data-title="Expand"
            onClick={toggleNavBar}
            className="text-xl p-4 cursor-pointer abbreviation"
          >
            <CgPushChevronRight />
          </div>
          <div className="md:flex flex-col gap-4">
            {quickLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  data-title={link.name}
                  className="icon-style abbreviation bg-primary text-[white]"
                  to={link.path}
                >
                  <span>{link.icon}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
