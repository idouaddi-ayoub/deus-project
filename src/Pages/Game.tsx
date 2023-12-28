import GameHero from "../sections/GameSection/GameHero";
import Caroussel from "../components/Caroussel";
const Game = () => {
  return (
    <main className="space-y-16">
      <GameHero />
      <Caroussel />
    </main>
  );
};

export default Game;
