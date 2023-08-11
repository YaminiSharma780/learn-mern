import { useState } from "react";

export default function Counter() {
    const [num, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(num + 1)}>Increment</button>
      <button onClick={() => setCount(num - 1)}>Decrement</button>
      <h1>{num}</h1>
    </>
  );
}
