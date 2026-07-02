import { Outlet } from "react-router-dom";

function ProjectLayout() {
  return (
    <div className="min-h-screen bg-black">
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
}

export default ProjectLayout;