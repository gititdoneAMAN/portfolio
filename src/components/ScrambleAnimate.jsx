import React from "react";
import { useScramble } from "use-scramble";

const ScrambleAnimate = ({ content, styleData, speedData, stepData }) => {
  const { ref, replay } = useScramble({
    text: content,
    speed: speedData || 0.5,
    step: stepData || 1,
  });

  return (
    <div className={styleData} ref={ref} onMouseOver={replay} onFocus={replay}>
      {content}
    </div>
  );
};

export default ScrambleAnimate;
