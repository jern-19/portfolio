import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contex/LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleContact = () => {
   navigate("/contact");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black w-full">
      <div className="w-full mx-auto flex h-14 max-w-7xl items-center justify-between ">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-gray-900"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
        </button>

        <div className="flex items-center gap-4">
 {/* Contact Button */}
        <button
          onClick={handleContact}
          className="
            flex items-center gap-2
            rounded-md
            border border-gray-700
            px-4 py-2
            text-sm font-medium text-white
            transition-all
            hover:border-white
            hover:bg-white
            hover:text-black
          "
        >
          <FontAwesomeIcon icon={faEnvelope} />
          Contact Me
        </button>

        {/* Language */}
        <div className="relative">
          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value as "en" | "de")
            }
            className="
              appearance-none
              rounded-md
              border border-gray-700
              bg-black
              px-3 py-2 pr-9
              text-sm text-white
              outline-none
              transition
              hover:border-gray-500
              focus:border-gray-500
            "
          >
            <option value="en">🇬🇧 EN</option>
            <option value="de">🇩🇪 DE</option>
          </select>

          <svg
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        </div>

       
      </div>
    </header>
  );
}