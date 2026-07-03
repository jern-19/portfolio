import { Outlet } from "react-router-dom";

function ProjectLayout() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 bg-black">
    <Outlet />
    </div>
  );
}

export default ProjectLayout;