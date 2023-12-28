import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { gameData } from "../constants";

const Caroussel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="Carou">
      <motion.div
        ref={carousel}
        className="cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex"
        >
          {gameData.map((game) => {
            return (
              <motion.div
                className="min-w-game-width min-h-game-height"
                key={game.id}
              >
                <img
                  className="h-game-img-height w-game-img-width rounded-game-img-border pointer-events-none"
                  src={game.img}
                  alt={game.name}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Caroussel;
