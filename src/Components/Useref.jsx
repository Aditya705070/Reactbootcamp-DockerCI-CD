import React, { useRef, useState } from "react";

const Useref = () => {
  const inputRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  const handleForm = () => {
    if (!clicked) {
      // First click: focus and set color
      inputRef.current.focus();
      inputRef.current.style.color = 'red';
      inputRef.current.placeholder = 'Active';
      setClicked(true);
    } else {
      // Second click: remove color and clear input
      inputRef.current.style.color = '';
      inputRef.current.value = '';
      inputRef.current.placeholder = 'Enter your name';
      setClicked(false);
    }
  };

  return (
    <>
      <h1>UseRef Hook</h1>
      <div>
        <input type='text' placeholder='Enter your name' ref={inputRef} />
        <button onClick={handleForm}>Focus Input</button>
      </div>
    </>
  )
}

export default Useref