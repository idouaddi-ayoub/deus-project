import { useState } from "react";
import { motion } from "framer-motion";

import { CounterStrike2 } from "../assets/images";
import { StreetFighter6 } from "../assets/images";

export const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isAnimated2, setIsAnimated2] = useState(false);

  function handleFlip() {
    if (!isAnimated) {
      setIsFlipped(!isFlipped);
      setIsAnimated(true);
    }
  }
  function handleFlip2() {
    if (!isAnimated2) {
      setIsFlipped2(!isFlipped2);
      setIsAnimated2(true);
    }
  }
  return (
    <div className="flex items-center justify-center bg-black h-[800px] cursor-pointer">
      <div className="flip-card rounded-md" onClick={handleFlip}>
        <motion.div
          className="flip-card-inner min-w-game-s-width min-h-game-s-height m-5"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] rounded-game-img-border  bg-cover border-[1px] text-white p-4"
            style={{ backgroundImage: `url(${CounterStrike2})` }}
          >
            <h1 className="text-2xl font-bold/">Counter-Strike 2</h1>
            <p>Greatest FPS of all time cap</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] rounded-game-img-border  bg-cover border-[1px] text-white p-4"
            style={{ backgroundImage: `url(${StreetFighter6})` }}
          >
            <h1 className="text-2xl font-bold/">Street Fighter 6</h1>
            <p>Best fighting game</p>
          </div>
        </motion.div>
      </div>
      <div className="flip-card rounded-md" onClick={handleFlip2}>
        <motion.div
          className="flip-card-inner min-w-game-s-width min-h-game-s-height m-5"
          initial={false}
          animate={{ rotateY: isFlipped2 ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated2(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] rounded-game-img-border  bg-cover border-[1px] text-white p-4"
            style={{ backgroundImage: `url(${CounterStrike2})` }}
          >
            <h1 className="text-2xl font-bold/">Counter-Strike 2</h1>
            <p>Greatest FPS of all time cap</p>
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] rounded-game-img-border  bg-cover border-[1px] text-white p-4"
            style={{ backgroundImage: `url(${StreetFighter6})` }}
          >
            <h1 className="text-2xl font-bold/">Street Fighter 6</h1>
            <p>Best fighting game</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;
