import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

function App() {
  //==================== teste do app realizados aqui ====================
  /* testes states
  const [TesteState, setTesteState] = useState("teste");
  return (
    <div>
      <h1>{TesteState}</h1>;
      <button
        onClick={() => {
          setTesteState("Mensagem Modificada");
        }}
      >
        Mudar mensagem
      </button>
    </div>
  );
  Fim teste states*/

  /* testes tailwind

    return (
    <div>
      <h1 className="text-red-800">Task Manager</h1>
      <AddTasks />
      <Tasks />
    </div>
  );
    Fim teste tailwind*/

  //==================== Fim do teste do app aqui ====================
  return (
    <div>
      <AddTasks />
    </div>
  );
}
export default App;
