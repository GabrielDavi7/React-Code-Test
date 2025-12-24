import {
  ThumbsUp,
  ThumbsDown,
  ChevronRightIcon,
  Trash2Icon,
} from "lucide-react";

function Tasks({ tasks, taskClick, deleteTaskClick }) {
  return (
    <ul className="space-y-4 bg-[#6e9987] p-6 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => taskClick(task.id)}
            className="text-left bg-[#114d4d] text-[#27191c] w-full p-2 rounded-md flex items-center gap-3"
          >
            {task.complete ? (
              <ThumbsUp size="22" className="text-green-600" />
            ) : (
              <ThumbsDown size="22" className="text-red-600" />
            )}
            {task.title}
          </button>

          <button className="bg-[#114d4d] p-2 text-[#27191c] rounded-md">
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => deleteTaskClick(task.id)}
            className="bg-[#114d4d] p-2 text-[#27191c] rounded-md"
          >
            <Trash2Icon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
