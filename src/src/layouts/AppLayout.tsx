import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  return (
    <div className="bg-black w-full h-screen flex flex-col items-center overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
}