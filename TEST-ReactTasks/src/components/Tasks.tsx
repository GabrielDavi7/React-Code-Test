import { ChevronDown, ChevronRightIcon } from "lucide-react";

function Tasks(props) {
  console.log(props);
  return (
    <ul className="space-y-4 bg-[#6e9987] p-6 rounded-md shadow">
      {props.tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button className=" text-left bg-[#e0e4ce] text-[#27191c] w-full p-2 rounded-md ">
            {tasks.title}
          </button>
          <button className=" bg-[#e0e4ce] p-2 text-[#27191c] rounded-md">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
