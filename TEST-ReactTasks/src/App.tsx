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
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Teste Task",
      description: "Testando tasks em useState",
      complete: false,
    },
    {
      id: 2,
      title: "Desenvolvimento react",
      description: "Teste do ambiente react e frontend",
      complete: false,
    },
    {
      id: 3,
      title: "teste 2 ",
      description: "Teste",
      complete: false,
    },
  ]);

  function taskClick(tasksId) {
    const newTasks = tasks.map((task) => {
      if (task.id === tasksId) {
        return { ...task, complete: !task.complete };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function deleteTaskClick(tasksId) {
    const newTasks = tasks.filter((tasks) => tasks.id !== tasksId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-[#2d3839] flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-[#27181C] font-bold text-center">
          Task Manager
        </h1>
        <AddTasks />
        <Tasks
          tasks={tasks}
          taskClick={taskClick}
          deleteTaskClick={deleteTaskClick}
        />
      </div>
    </div>
  );
}
export default App;
