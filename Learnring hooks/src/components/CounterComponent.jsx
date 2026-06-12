import { useState } from "react";

export default function CounterComponent() {
  const [count, setCount] = useState(0);
  const [pattern, setPattern] = useState([]);

  const increment = () => { setCount(count + 1);};

  const decrement = () => {
    if (count > 0) { setCount(count - 1); }
  };

  const showPattern = () => {
    const stars = [];

    for (let i = 1; i <= count; i++) {
      stars.push("*".repeat(i));
    }
    setPattern(stars);
  };

  return (
    <div className="p-6 ml-96 mt-10">
      <h1 className="text-2xl font-bold mb-4"> Star Pattern Generator</h1>
      <h2 className="text-lg mb-4">Number of Lines: {count} </h2>

      <div className="flex gap-2 mb-4">
        <button
          onClick={decrement}
          className="border px-4 py-2 rounded">Decrement</button>

        <button
          onClick={increment}
          className="border px-4 py-2 rounded">Increment</button>
      </div>

      <button
        onClick={showPattern}
        className="border px-4 py-2 rounded mb-4">Show Stars</button>

      <div className="border p-4 rounded min-h-25 max-w-lg">
        {pattern.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}