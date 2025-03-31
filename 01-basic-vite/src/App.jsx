import React, {useState} from "react";                    //useState is a component of react
import Chai from "./Chai";                                // to understand react flow new jsx file is made

function App() {                                          // function and class components are here this is function
  const [count, setCount]= useState(0);

  const handleIncrement= () => {
    setCount(count+1);
  };

  return (
   <div>
    <h1> Counter App </h1>
    <p>Count:{count}</p>

    <button onClick={handleIncrement}>Click Me!!</button>

    {/* <Chai /> */}
   </div>
  );
}

export default App;