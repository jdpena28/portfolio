import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";

const ConfettiEffect = () => {
  const [recycle, setRecycle] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setRecycle(false);
    }, 2000);
  }, []);
  const { width, height } = useWindowSize();
  return (
    <Confetti
      className="!z-[54]"
      recycle={recycle}
      width={width - 30}
      height={height}
      numberOfPieces={250}
    />
  );
};

export default ConfettiEffect;
