import React from "react";
import { connect } from "react-redux";

const Todos = (props) => {
  console.log(props.todos);
  return (
    <div className="todosDiv">
      <h1>I'm TODOS.</h1>
      {props.todos.map((todo, i) => (
        <div key={i}>
          <h1>{todo.title}</h1>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default connect((state) => ({ todos: state.todos }), {})(Todos);
