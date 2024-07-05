import React from "react";
import Logo from "../../assets/images/honda-logo.webp";
import { CiMenuFries } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const NavMenu = [
    {
      id: 1,
      title: "Home",
      link: "#",
    },
    {
      id: 2,
      title: "About us",
      link: "#",
    },
    {
      id: 3,
      title: "Bikes",
      link: "#",
    },
    {
      id: 4,
      title: "Cars",
      link: "#",
    },
  ];
  return (
    <main className="absolute top-0 left-0 w-full pt-10 z-20 text-white">
      <div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container"
      >
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <img src={Logo} alt="Logo-Icon" className="w-[80px] invert" />
          </div>
          {/* Nav Menu Section */}
          <div className="hidden md:block">
            <ul className="flex gap-4">
              {NavMenu.map((menu) => (
                <li key={menu.id} className="">
                  <a
                    href="menu.link"
                    className="inline-block px-6 py-2 uppercase hover:bg-primary duration-200 rounded-md hover:shadow-[0px_0px_20px_8px_#d2e6ff]"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Hamburger Menu */}
          <div className="flex items-center gap-6">
            <div className="rounded-icons">
              <CiMenuFries className="text-xl" />
            </div>
            <div className="rounded-icons">
              <FaSearch className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
