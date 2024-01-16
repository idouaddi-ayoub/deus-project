import { useState } from "react";
import { motion } from "framer-motion";

import { CounterStrike2 } from "../assets/images";
import { StreetFighter6 } from "../assets/images";

export const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isAnimated2, setIsAnimated2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isAnimated3, setIsAnimated3] = useState(false);

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
  function handleFlip3() {
    if (!isAnimated3) {
      setIsFlipped3(!isFlipped3);
      setIsAnimated3(true);
    }
  }
  return (
    <div className="flex items-center justify-center pb-20">
      <div
        className="flip-card rounded-md cursor-pointer m-5"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner min-w-game-s-width min-h-game-s-height"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.5, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] rounded-game-img-border  bg-cover border-[1px] text-white p-4"
            style={{ backgroundImage: `url(${CounterStrike2})` }}
          >
            {/* <h1 className="text-2xl font-bold/">Counter-Strike 2</h1>
            <p>Greatest FPS of all time cap</p> */}
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] rounded-game-img-border  bg-cover border-[1px] text-white p-4"
            style={{ backgroundImage: `url(${StreetFighter6})` }}
          >
            {/* <h1 className="text-2xl font-bold/">Street Fighter 6</h1>
            <p>Best fighting game</p> */}
          </div>
        </motion.div>
      </div>
      <div
        className="flip-card rounded-md cursor-pointer m-5"
        onClick={handleFlip2}
      >
        <motion.div
          className="flip-card-inner min-w-game-s-width min-h-game-s-height"
          initial={false}
          animate={{ rotateY: isFlipped2 ? 180 : 360 }}
          transition={{ duration: 0.5, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated2(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] rounded-game-img-border  bg-cover border-[1px] text-white p-4"
            style={{ backgroundImage: `url(${CounterStrike2})` }}
          >
            {/* <h1 className="text-2xl font-bold/">Counter-Strike 2</h1>
            <p>Greatest FPS of all time cap</p> */}
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] rounded-game-img-border  bg-cover border-[1px] text-white p-4"
            style={{ backgroundImage: `url(${StreetFighter6})` }}
          >
            {/* <h1 className="text-2xl font-bold/">Street Fighter 6</h1>
            <p>Best fighting game</p> */}
          </div>
        </motion.div>
      </div>
      <div
        className="flip-card rounded-md cursor-pointer m-5"
        onClick={handleFlip3}
      >
        <motion.div
          className="flip-card-inner min-w-game-s-width min-h-game-s-height"
          initial={false}
          animate={{ rotateY: isFlipped3 ? 180 : 360 }}
          transition={{ duration: 0.5, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated3(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] rounded-game-img-border  bg-cover border-[1px] text-white p-4"
            style={{ backgroundImage: `url(${CounterStrike2})` }}
          >
            {/* <h1 className="text-2xl font-bold/">Counter-Strike 2</h1>
            <p>Greatest FPS of all time cap</p> */}
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] rounded-game-img-border  bg-cover border-[1px] text-white p-4"
            style={{ backgroundImage: `url(${StreetFighter6})` }}
          >
            {/* <h1 className="text-2xl font-bold/">Street Fighter 6</h1>
            <p>Best fighting game</p> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;
