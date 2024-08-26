import "./App.css";

function App() {
  const name: string = "John Doe";
  const age: number = 30;
  const done: boolean = true;
  const trial: number | string = 5;

  interface Obj {
    name: string;
    age: number;
    done?: boolean;
  }

  interface ObjTwo extends Obj {
    // name: string;
    // age: number;
    // done?: boolean;
    accept?: boolean;
  }

  const obj: ObjTwo = {
    name: "John Doe",
    age: 30,
    done: true,
  };

  return (
    <div className="App">
      {name} - {age} - {done ? "true" : "false"} - {trial}
      <br />
      {obj.name} - {obj.age} - {obj.done ? "true" : "false"} -{trial}
    </div>
  );
}

export default App;
