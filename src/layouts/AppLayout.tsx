import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Toolbar from '../components/Toolbar';
import ScrollToTop from '../components/ScrollToTop';

export default function AppLayout() {
  return (
    <div className="bg-black w-full flex flex-col items-center">
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Toolbar />
    </div>
  );
}
