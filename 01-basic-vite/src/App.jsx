import React, {useState} from "react";

function App() {
  const [count, setCount]= useState(0);

  const handleIncrement= () => {
    setCount(count+1);
  };

  return (
   <div>
    <h1> Counter App </h1>
    <p>Count:{count}</p>

    <button onClick={handleIncrement}>Click Me!!</button>
   </div>
  );
}

export default App;