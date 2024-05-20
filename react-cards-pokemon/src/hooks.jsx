import React, { useState } from "react";

/* Custom hook to handle flipping a card */
function useFlip() {
  const [isUp, setIsUp] = useState(true);
  const flipCard = () => {
    setIsUp((isValue) => !isValue);
  };

  return [isUp, flipCard];
}

export default useFlip;
