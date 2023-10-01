import DEUS from "../assets/images/DEUS 1600x1600.png";
import menu from "../assets/icons/hamburger.svg";
import { navlink } from "../constants";

const Navbar = () => {
  return (
    <header className="padding-x py-4 pb-8 absolute z-10 w-full mb-8">
      <nav className="flex justify-between items-center max-container z-10">
        <a href="/">
          <img
            src={DEUS}
            width={150}
            alt="DEUSGC"
            className="m-0 w-[150px] h-[150px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navlink.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-Gray-5"
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
