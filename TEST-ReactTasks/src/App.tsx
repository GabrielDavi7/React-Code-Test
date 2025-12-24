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

  // ================= notes ============
  /*
      <div className="w-screen h-screen"> faz com que a div cubra toda a tela
      <div className="w-screen h-screen bg-[#114d4d] flex justify-center p-6"> cores em HEX

  */
  return (
    <div className="w-screen h-screen bg-[#114d4d] flex justify-center p-6">
      <AddTasks />
    </div>
  );
}
export default App;
