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

   const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 0 -> 200px
  const progress = Math.min(scrollY / 200, 1);

  return (
<div className="min-h-screen bg-black flex flex-col items-center">
      {/* Cover */}
      <div className="w-[900px] relative">
        <img
          src={bg}
          className="w-full h-[180px] object-cover rounded-b-xl"
        />
      </div>

      <div className="w-[700px]">
        {/* ========================= */}
        {/* Profile (animated) */}
        {/* ========================= */}

        <div
          className="pt-4 pb-8"
          style={{
            opacity: 1 - progress,
            transform: `translateY(-${progress * 80}px)`,
            transition: "opacity .1s linear",
          }}
        >
          <div className="-mt-20">
            <div className="w-[130px] h-[130px] rounded-full overflow-hidden border-4 border-white">
              <img
                src={Jern}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <h1 className="text-white text-5xl font-bold">
              Jern
            </h1>

            <p className="text-xl text-gray-200">
              Full Stack Software Engineer 💼
            </p>

            <p className="text-gray-300 max-w-2xl">
              Moderne Webanwendungen entwickeln und
              Altsysteme in skalierbare Lösungen
              transformieren.
            </p>

            <div className="flex justify-end gap-6 pt-4 text-gray-300">
              <span>📅 Joined 2016</span>
              <span>📍 München</span>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* Sticky Nav */}
        {/* ========================= */}

        <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-lg border-b border-zinc-800">
          <nav className="h-16 flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex-1 text-center pb-4 ${
                  isActive
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `flex-1 text-center pb-4 ${
                  isActive
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400"
                }`
              }
            >
              Experience
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `flex-1 text-center pb-4 ${
                  isActive
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400"
                }`
              }
            >
              Projects
            </NavLink>
             <NavLink
              to="/articles"
              className={({ isActive }) =>
                `flex-1 text-center pb-4 ${
                  isActive
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400"
                }`
              }
            >
              Articles
            </NavLink>
          </nav>
        </div>

        {/* ========================= */}
        {/* Page */}
        {/* ========================= */}

        <div className="py-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
