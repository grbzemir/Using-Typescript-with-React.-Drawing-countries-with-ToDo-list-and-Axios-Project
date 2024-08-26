import "./App.css";
import Input from "./Components/Input";
import { useState } from "react";
import { Todos } from "./Types/Type";
import Message from "./Components/Message";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);
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
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.message = todo.message + " - Güncellendi";
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo} />
      <Message
        todos={todos}
        deleteMessage={deleteMessage}
        updateMessage={updateMessage}
      />
    </div>
  );
};

export default App;
