import "./App.css";
import Input from "./Components/Input";
import { useState } from "react";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  console.log(todo, setTodo);
  return (
    <div className="App">
      <Input todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
