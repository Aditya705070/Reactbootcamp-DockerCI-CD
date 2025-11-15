import React from "react";

const Demofunction = () => {
  const username = "Aditya Kumar";
  const fruits = ["Apple", "Banana", "Cherry"];
  const obj = { name: "Aditya", age: 25, city: "Delhi" };

  return (
    <>
      <h1>Welcome to the Demo Function Component</h1>
      <p>This is a simple demonstration of a functional component in React.</p>
      <div>{username}</div>
      <div>
        <ul>
          {fruits.map((fruit, i) => (
            <li key={i}>
              {fruit}:{i}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {Object.entries(obj).map(([key, value]) => (
            <li key={key.name}>
              {key}:{value}
            </li>
          ))}
        </ul>
      </div>
      
    </>
  );
};

export default Demofunction;
