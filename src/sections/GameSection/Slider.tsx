import HorizontalScroll from "../../components/HorizontalScrollProps";
import { gameData } from "../../constants";
const Slider = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="relative overflow-hidden">
        <HorizontalScroll>
          <div className="flex space-x-4">
            {gameData.map((game) => (
              <div className="game" key={game.id}>
                <div className="w-[200px] p-3">
                  <img src={game.img} alt={game.name} />
                </div>
                <div className="text-center">{game.name}</div>
              </div>
            ))}
          </div>
        </HorizontalScroll>
      </div>
    </div>
  );
};

export default Slider;
