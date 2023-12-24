import { gameData } from "../../constants";
import { AssassinCreed } from "../../assets/images";
import { MdChervronLeft } from "react-icons/md";
const GameHero = () => {
  return (
    <section>
      <img
        className="w-full h-[440px] object-cover"
        src={AssassinCreed}
        alt="lol"
      />
      <div className="relative flex items-center">
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
        >
          {gameData.map((item) => (
            <img
              className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.img}
              alt="/"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameHero;
