import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  return (
    <h1 className="w-screen h-screen bg-[#2d3839] flex justify-center p-6">
      task page
    </h1>
  );
}

export default TaskPage;
