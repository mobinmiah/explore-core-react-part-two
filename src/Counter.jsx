import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const counterStyle = {
    border: "3px solid gray",
    borderRadius: "20px",
    marginBotton: "20px",
    padding: "30px",
  };
  return (
    <div style={counterStyle}>
      <h3>Count : {count}</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
