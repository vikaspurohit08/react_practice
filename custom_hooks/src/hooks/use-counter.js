import { useState, useEffect } from "react";

const useCounter = (isForward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) =>
        isForward ? prevCounter + 1 : prevCounter - 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [isForward]);

  return counter;
};

export default useCounter;
