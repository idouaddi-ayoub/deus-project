import { gameData } from "../constants";

const Slider = () => {
  return (
    <div className=" w-full flex gap-32 overflow-x-auto scrollbar-hide select-none bg-slate-400">
      <div className="relative overflow-hidden">
        <div className="top-0 left-0 grid grid-cols-7 pointer-events-none gap-5 ease-in">
          {gameData.map((game) => (
            <div className="game" key={game.id}>
              <div className="w-[200px] p-3">
                <img src={game.img} alt={game.name} />
              </div>
              <div className="text-center">{game.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
