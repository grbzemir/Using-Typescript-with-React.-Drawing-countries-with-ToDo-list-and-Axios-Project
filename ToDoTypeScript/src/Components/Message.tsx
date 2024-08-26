import React from "react";
import { Todos } from "../Types/Type";

type Props = {
  todos: Todos[];
  deleteMessage: (id: number) => void;
  updateMessage: (id: number) => void;
};

const Message: React.FC<Props> = ({ todos, deleteMessage, updateMessage }) => {
  return (
    <div>
      {todos.map((todo, i) => (
        <div key={i}>
          {todo.message} -{" "}
          <span
            onClick={() => deleteMessage(todo.id)}
            style={{ cursor: "pointer" }}
          >
            x
          </span>
        </div>
      ))}
    </div>
  );
};

export default Message;
