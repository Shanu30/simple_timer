import { useState, useEffect } from "react";

export default function Timer({ start, end }) {
  const [timer, setTimer] = useState(start);
  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev === end - 1) {
          clearInterval(id);
        }
        return prev + 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [end]);
  return (
    <div>
      <p>Starting Time: {start} Second</p>
      <p>Ending Time: {end} Second</p>
      <h1>{timer} sec</h1>
    </div>
  );
}
