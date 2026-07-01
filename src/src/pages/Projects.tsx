import { Link } from 'react-router-dom';
import Jern from '../assets/Jern.png';

function Projects() {
  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-auto pr-8">

<div className="w-full flex flex-row gap-4 justify-between">
    <Link to="/project/restaurant-ratings">
      <div className="w-[216px] h-[216px] overflow-hidden transition-all duration-300 hover:-translate-y-2">
          <img className="w-full h-full object-cover" src={Jern} alt="Background" />
        </div>
      </Link>
      <Link to="/project/chatApplication">
      <div className="w-[216px] h-[216px] overflow-hidden transition-all duration-300 hover:-translate-y-2">
          <img className="w-full h-full object-cover" src={Jern} alt="Background" />
        </div>
      </Link>
      <Link to="/project/restaurant-ratings">
      <div className="w-[216px] h-[216px] overflow-hidden transition-all duration-300 hover:-translate-y-2">
          <img className="w-full h-full object-cover" src={Jern} alt="Background" />
        </div>
      </Link>
</div>

     <div className="w-full flex flex-row gap-4 justify-between">
    <Link to="/project/restaurant-ratings">
      <div className="w-[216px] h-[216px] overflow-hidden transition-all duration-300 hover:-translate-y-2">
          <img className="w-full h-full object-cover" src={Jern} alt="Background" />
        </div>
      </Link>
      <Link to="/project/restaurant-ratings">
      <div className="w-[216px] h-[216px] overflow-hidden transition-all duration-300 hover:-translate-y-2">
          <img className="w-full h-full object-cover" src={Jern} alt="Background" />
        </div>
      </Link>
      <Link to="/project/restaurant-ratings">
      <div className="w-[216px] h-[216px] overflow-hidden transition-all duration-300 hover:-translate-y-2">
          <img className="w-full h-full object-cover" src={Jern} alt="Background" />
        </div>
      </Link>
</div>


    </div>
  );
}

export default Projects;