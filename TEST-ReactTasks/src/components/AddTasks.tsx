import { useState } from "react";

function AddTasks({ addNewTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 bg-[#6e9987] text-white font-bold p-6 rounded-md shadow flex flex-col">
      <input
        className="bg-[#114d4d] border-slate-300 outline-slate-700 px-4 py-2 rounded-md"
        type="text"
        placeholder="Type new tasks"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        className="bg-[#114d4d]  border-slate-300 outline-slate-700 px-4 py-2 rounded-md"
        type="text"
        placeholder="Type new description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            setTitle("");
            setDescription("");
            return alert(
              "Please provide the title and description of the task."
            );
          }
          addNewTask(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-[#114d4d] font-medium border-slate-300 outline-slate-700 px-4 py-2 rounded-md"
      >
        Confirm
      </button>
    </div>
  );
}
export default AddTasks;
