import { Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import bg from "../assets/bg.png";
import Jern from "../assets/Jern.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faMapPin, faCircle } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../contex/LanguageContext';
import { useEffect, useState } from "react";

function HomeLayout() {
    const { t } = useLanguage();

     const [start, setStart] = useState(false);

    useEffect(() => {
    setStart(false); // reset first
    const timer = setTimeout(() => {
      setStart(true); // trigger animation
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`bg-black w-full h-[calc(100vh-33px)] flex flex-col items-center overflow-hidden transition-all duration-700 ease-out
          ${start ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}
        `}   >
      <img className="w-[900px] h-[180px] object-cover" src={bg} alt="Your Image" />
      <div className="w-[700px] flex flex-col h-[calc(100vh-250px)] gap-6">
        <div className="flex flex-col">
          <div className="flex rounded-full mt-[-60px]">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={Jern}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
              <span className="text-white text-[36px] font-bold">Jern</span>
              <span className="text-white text-[16px]">{t.home.title}</span>
              <span className="text-white text-[14px]">{t.home.description}</span>
            </div>
          
          <div className="flex flex-row gap-4 justify-end pr-8">
            <div className="flex flex-row text-sm gap-1 items-center">
              <span className="text-white">📅 {t.home.joined}</span>
            </div>
            <div className="flex flex-row text-sm gap-1 items-center">
              <span className="text-white">📍 {t.home.location}</span>
            </div>
          </div>
        </div>
        </div>
        
        <nav className="text-white text-xl w-full flex justify-between">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block w-full text-center pb-1 hover:text-white ${
                isActive
                  ? "border-b-2 border-white text-white"
                  : "border-b-2 border-transparent text-gray-400"
              }`
            }
          >
            {t.navbar.me}
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `block w-full text-center pb-1 hover:text-white ${
                isActive
                  ? "border-b-2 border-white text-white"
                  : "border-b-2 border-transparent text-gray-400"
              }`
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `block w-full text-center pb-1 hover:text-white ${
                isActive
                  ? "border-b-2 border-white text-white"
                  : "border-b-2 border-transparent text-gray-400"
              }`
            }
          >
            Projects
          </NavLink>
        </nav>
       <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
