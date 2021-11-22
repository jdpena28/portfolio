import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";

const ConfettiEffect = () => {
  const [recycle, setRecycle] = useState<boolean>(true);
  const [unMount, setUnMount] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setRecycle(false);
    }, 2000);
  }, []);
  const { width, height } = useWindowSize();
  return (
    <>
    {!unMount&&<Confetti
        className="!z-[54]"
        recycle={recycle}
        width={width - 18}
        height={height}
        numberOfPieces={250}
        onConfettiComplete={() => {setUnMount(true); console.log("Component Unmounted")}}
      />}
    </>
  );
};

export default ConfettiEffect;
