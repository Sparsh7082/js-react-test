import React, { useReducer, useState } from "react";

const Todo = () => {
  const initalState = [];
  const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "REMOVE":
        return [state.filter((t, idx) => idx !== action.payload)];
      default:
        state;
    }
  };

  const [state, dispatch] = useReducer(todoReducer, initalState);

  const [input, setInput] = useState("");
  console.log(state);

  return (
    <div>
      <input
        type="text"
        placeholder="enter todo"
        onChange={({ target }) => setInput(target.value)}
        value={input}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD", payload: { input } }), setInput("");
        }}
      >
        add
      </button>

      {state && (
        <div>
          {state.map((t, idx) => {
            <p>{t.input}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Todo;
