import DEUS from "../assets/images/DEUS.png";
import menu from "../assets/icons/hamburger.svg";
import { navlink } from "../constants";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={DEUS}
            alt="DEUSGC"
            width={100}
            height={100}
            className="m-0 w-[150px] h-[150px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navlink.map((item) => (
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
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Login</a>
          <span>/</span>
          <a href="/">Sign up</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={menu} alt="menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
