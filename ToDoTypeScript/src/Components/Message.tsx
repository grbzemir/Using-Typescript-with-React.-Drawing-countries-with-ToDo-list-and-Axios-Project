import React from "react";
import { Todos } from "../Types/Type";

type Props = {
  todos: Todos[];
  deleteMessage: (id: number) => void;
  updateMessage: (id: number) => void;
  editingId: number | null;
  editingMessage: string;
  setEditingMessage: React.Dispatch<React.SetStateAction<string>>;
  editMessage: () => void;
};

const Message: React.FC<Props> = ({
  todos,
  deleteMessage,
  updateMessage,
  editingId,
  editingMessage,
  setEditingMessage,
  editMessage,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {editingId === todo.id ? (
            <div>
              <input
                value={editingMessage}
                onChange={(e) => setEditingMessage(e.target.value)}
              />
              <button onClick={editMessage}>Kaydet</button>
            </div>
          ) : (
            <div>
              {todo.message}
              <span
                onClick={() => updateMessage(todo.id)}
                style={{ cursor: "pointer", marginLeft: "10px" }}
              >
                Güncelle
              </span>
              <span
                onClick={() => deleteMessage(todo.id)}
                style={{ cursor: "pointer", marginLeft: "10px", color: "red" }}
              >
                Sil
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Message;
