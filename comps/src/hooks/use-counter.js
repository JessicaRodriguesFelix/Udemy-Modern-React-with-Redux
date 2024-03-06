import { useState, useEffect } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {}, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  //returns an object with properties and values
  return {
    count,
    increment,
  };
}

export default useCounter;