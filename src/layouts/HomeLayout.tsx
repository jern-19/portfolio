import { NavLink, Outlet } from "react-router-dom";
import bg from "../assets/bg.png";
import Jern from "../assets/Jern.png";
import { useEffect, useState } from "react";

function HomeLayout() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const progress = Math.min(scrollY / 200, 1);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center">
      {/* Cover */}
      <div className="w-full max-w-[900px] px-4 relative">
        <img
          src={bg}
          alt="Cover"
          className="w-full h-40 sm:h-48 md:h-[180px] object-cover rounded-b-xl"
        />
      </div>

      <div className="w-full max-w-[700px] px-4">
        {/* Profile */}
        <div
          className="pt-4 pb-8"
          style={{
            opacity: 1 - progress,
            transform: `translateY(-${progress * 60}px)`,
            transition: "opacity .1s linear",
          }}
        >
          <div className="-mt-16 sm:-mt-20">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-[130px] md:h-[130px] rounded-full overflow-hidden border-4 border-white">
              <img
                src={Jern}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              Jern
            </h1>

            <p className="text-gray-200 text-base sm:text-lg md:text-xl">
              Full Stack Software Engineer 💼
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Moderne Webanwendungen entwickeln und Altsysteme in skalierbare
              Lösungen transformieren.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-end gap-2 sm:gap-6 pt-4 text-gray-300 text-sm">
              <span>📅 Joined 2016</span>
              <span>📍 München</span>
            </div>
          </div>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-lg border-b border-zinc-800">
          <nav className="h-14 sm:h-16 flex items-center overflow-x-auto">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex-1 min-w-[90px] text-center pb-3 sm:pb-4 transition-all ${
                  isActive
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `flex-1 min-w-[90px] text-center pb-3 sm:pb-4 transition-all ${
                  isActive
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Experience
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `flex-1 min-w-[90px] text-center pb-3 sm:pb-4 transition-all ${
                  isActive
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Projects
            </NavLink>
{/* 
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                `flex-1 min-w-[90px] text-center pb-3 sm:pb-4 transition-all ${
                  isActive
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Articles
            </NavLink> */}
          </nav>
        </div>

        {/* Page Content */}
        <div className="py-6 sm:py-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;