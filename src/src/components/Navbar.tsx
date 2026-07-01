import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useLanguage } from "../contex/LanguageContext";



export default function Navbar() {
    const { language, setLanguage } = useLanguage();
      const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-black w-full">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <button
      onClick={() => navigate(-1)}
      className="text-xl font-bold tracking-tight text-white hover:text-gray-300"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
           <select
           value={language}
            onChange={(e) => setLanguage(e.target.value as "en" | "de")}
            className="rounded-md bg-black px-3 py-1.5 text-sm text-white focus:border-gray-500 focus:outline-none"
          >
            <option value="en">🇬🇧 EN</option>
            <option value="de">🇩🇪 DE</option>
          </select>
         
        </nav>
      </div>
    </header>
  );
}