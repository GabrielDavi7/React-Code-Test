function AddTasks() {
  return (
    <div className="space-y-4 bg-[#6e9987] text-white font-bold p-6 rounded-md shadow flex flex-col">
      <input
        className="bg-[#114d4d] border-slate-300 outline-slate-700 px-4 py-2 rounded-md"
        type="text"
        placeholder="Type new tasks"
      ></input>
      <input
        className="bg-[#114d4d]  border-slate-300 outline-slate-700 px-4 py-2 rounded-md"
        type="text"
        placeholder="Type new description"
      ></input>
      <button className="bg-[#114d4d] font-medium border-slate-300 outline-slate-700 px-4 py-2 rounded-md">
        Confirm
      </button>
    </div>
  );
}
export default AddTasks;
