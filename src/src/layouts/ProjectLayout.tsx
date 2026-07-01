import { Outlet } from "react-router-dom";

function ProjectLayout() {
  return (
   <div className="bg-black w-full min-h-screen flex flex-col items-center scroll-auto">
      <main className="w-full max-w-7xl">
        <Outlet />
      </main>
    </div>
  );
}

export default ProjectLayout;