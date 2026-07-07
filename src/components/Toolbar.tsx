import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Toolbar() {
  return (
    <div className="sticky z-50 bottom-6  items-center">
      <div className="flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#111111]/95 px-5 py-2 shadow-2xl backdrop-blur-md">
        <span className="text-sm text-gray-300">Made with</span>

        <FontAwesomeIcon icon={faHeart} className="text-red-400" />

        <span className="text-sm text-gray-300">
          by <span className="font-semibold text-white">Jern</span>
        </span>
      </div>
    </div>
  );
}
