import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  //use Ref puts the focus directly inside the input field
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value);
    //Thus e.target.value is the value property of some DOM element, in this case that means the text entered in the search input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //The event.preventDefault() method stops the default action of an element from happening.

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Was vergessen?"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Update</button>
        </>
      ) : (
        <>
          <input
            //type="text"
            placeholder="Walk the car!...wash the dog...your turn!"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Trau Dich!</button>
        </>
      )}
    </form>
  );
}
export default TodoForm;
