import React from "react";
import { useScramble } from "use-scramble";

const ScrambleAnimateLink = ({ content, styleData, link }) => {
  const { ref, replay } = useScramble({
    text: content,
    speed: 0.5,
    step: 1,
  });

  return (
    <a
      href={link}
      className={styleData}
      ref={ref}
      onMouseOver={replay}
      onFocus={replay}
      style={{ textDecoration: "none" }} // Ensure no underline or styling issues
    >
      {content}
    </a>
  );
};

export default ScrambleAnimateLink;
