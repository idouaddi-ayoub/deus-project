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
    <div className="Carou py-10">
      <motion.div
        ref={carousel}
        className="cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex pl-16"
        >
          {gameData.map((game) => {
            return (
              <motion.div
                className="min-w-game-width min-h-game-height"
                key={game.id}
              >
                {" "}
                {/*Change images resolution (all images needs to be the same res) */}
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
