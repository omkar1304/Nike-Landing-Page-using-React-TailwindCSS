import { useState } from "react";
import { hamburger } from "../assets/icons";
import { cross } from "../assets/icons/";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handletoggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        

        {toggle ? (<div>
            <div className="hidden max-lg:flex justify-end" onClick={handletoggle}>
              <img
                src={cross}
                alt="cross icon"
                width={35}
                height={35}
                className="pb-3"
              />
            </div>
            <ul className="flex-1 flex flex-col items-end gap-12">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>) : (<div className="hidden max-lg:block" onClick={handletoggle}>
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>)}
      </nav>
    </header>
  );
};

export default Nav;
