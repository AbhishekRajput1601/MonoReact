import { useState, useRef } from "react";

export default function NameInput() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const cityRef = useRef(null);

  const handleChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleCityChange = () => {
    console.log(cityRef.current.value)
    setCity(cityRef.current.value);
  };

  return (
    <div className="mt-32 ml-96 p-6 border rounded w-80">
      <h2 className="text-xl font-bold mb-4">
        Enter Your Name And City
      </h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />

      <p className="mt-4">
        Name : <strong>{name}</strong>
      </p>

        <div className="mb-4">
        <br />
        <input
          type="text"
          ref={cityRef}
          onChange={handleCityChange}
          placeholder="Enter city"
          className="border p-2 w-full rounded"
        />

        <p className="mt-4">
        City : <strong>{city}</strong>
      </p>

      </div>

    </div>
  );
}