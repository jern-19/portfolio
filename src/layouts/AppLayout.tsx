import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Toolbar from '../components/Toolbar';

export default function AppLayout() {
  return (
    <div className="bg-black w-full flex flex-col items-center">
      <Navbar />
      <Outlet />
      <Toolbar />
    </div>
  );
}
