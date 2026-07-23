import { useEffect, useEffectEvent, useState } from "react";

function UseEE() {
  const [count, setCount] = useState(0);

  const onTick = useEffectEvent(() => {
    console.log("Count:", count);
    setCount((c) => c + 1);
  });

  useEffect(() => {
    console.log("Effect Started");

    const id = setInterval(() => {
      console.log("Interval Running");
      onTick();
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default UseEE;