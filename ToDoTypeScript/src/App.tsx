import "./App.css";
import Input from "./Components/Input";
import { useState } from "react";
import { Todos } from "./Types/Type";
import Message from "./Components/Message";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingMessage, setEditingMessage] = useState<string>("");
  // [
  //   {
  //     id: 1,
  //     text: "Todo 1",
  //     isCompleted: false
  //   },
  //   {
  //     id: 2,
  //     text: "Todo 2",
  //     isCompleted
  //   }
  // ]

  console.log(todo, "todos");

  const addMessage = () => {
    if (todo) {
      const newTodos = [...todos, { message: todo, id: todos.length + 1 }];
      setTodos(newTodos);
      setTodo("");
    }
  };

  const deleteMessage = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const updateMessage = (id: number) => {
    setEditingId(id);
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEditingMessage(todoToEdit.message);
    }
  };
  const editMessage = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === editingId) {
          return { ...todo, message: editingMessage };
        }
        return todo;
      })
    );
    setEditingId(null);
    setEditingMessage("");
  };

  return (
    <div className="App">
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo} />
      <Message
        todos={todos}
        deleteMessage={deleteMessage}
        updateMessage={updateMessage}
        editingId={editingId}
        editingMessage={editingMessage}
        setEditingMessage={setEditingMessage}
        editMessage={editMessage}
      />
    </div>
  );
};

export default App;
