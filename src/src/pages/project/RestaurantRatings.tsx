import restaurantRating1 from '../../assets/restaurantRating1.png';
import react from '../../assets/react.png';
import js from '../../assets/js.png';
import python from '../../assets/python.png'
import firestore from '../../assets/firestore.svg';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faStar , faArrowLeft, faCheck} from '@fortawesome/free-solid-svg-icons';

export default function RestaurantRatings() {
  const images = [
  { id: 1, title: "Mountain", url: "https://picsum.photos/800/600?1" },
  { id: 2, title: "City", url: "https://picsum.photos/800/600?2" },
  { id: 3, title: "Forest", url: "https://picsum.photos/800/600?3" },
  { id: 4, title: "Ocean", url: "https://picsum.photos/800/600?4" },
  { id: 5, title: "Desert", url: "https://picsum.photos/800/600?5" },
  { id: 6, title: "Night Sky", url: "https://picsum.photos/800/600?6" },
];

const [index, setIndex] = useState(0);

const itemsPerPage = 4;
const totalPages = Math.ceil(images.length / itemsPerPage);

const prev = () => {
  setIndex((p) => (p === 0 ? totalPages - 1 : p - 1));
};

const next = () => {
  setIndex((p) => (p === totalPages - 1 ? 0 : p + 1));
};

const visibleImages = images.slice(
  index * itemsPerPage,
  index * itemsPerPage + itemsPerPage
);

const page = Math.floor(index / itemsPerPage);

  return (
    <div className="w-full h-screen flex flex-col gap-[100px] overflow-auto p-20 bg-black overflow-auto px-6">
      <section className="bg-black flex items-center">
      <div className=" mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE - TEXT */}
        <div className="flex-1 text-center md:text-left">

          <p className="text-orange-400 uppercase tracking-widest text-sm mb-4">
            Full Stack Project
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Restaurants{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Reviews & Rating
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            A full-stack web application that allows users to discover restaurants,
            share reviews, rate their experiences and explore top-rated places.
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
             <a href="https://www.youtube.com/watch?v=mWvquhIx6nQ" target="_blank" rel="noopener noreferrer">
               <button className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition">
              Live Demo
            </button>
            </a>

            <a href="https://github.com/cerenbulbul/Restaurants_Reviews_Rating" target="_blank" rel="noopener noreferrer">
                 <button className="px-6 py-3 rounded-lg border border-orange-500 text-orange-400 hover:bg-orange-500/10 transition">
              GitHub
            </button>
            </a>

          
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* glow effect */}
            <div className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-full"></div>

            <img
              src={restaurantRating1}
              alt="Project preview"
              className="relative w-[300px] md:w-[420px] rounded-xl shadow-2xl border border-orange-500/30"
            />
          </div>
        </div>

      </div>
    </section>

    <section className=" bg-black flex flex-col gap-1 items-center p-4 border border-orange-500/30 bg-orange-500/5 rounded-xl">
      <span className="text-sm font-bold text-gray-300 mb-6">Technologies Used</span>
      <div className="w-full flex flex-row items-center justify-between gap-6">
      <div className="flex flex-row gap-2 center items-center">
        <img
              src={react}
              alt="Project preview"
              className="relative w-[30px] md:w-[30px] rounded-xl shadow-2xl "
            />
      <span className="text-white text-md font-bold">React Native</span>
      </div>
      <div className="flex flex-row gap-2 center items-center">
        <img
              src={js}
              alt="Project preview"
              className="relative w-[30px] md:w-[30px] rounded-xl shadow-2xl "
            />
      <span className="text-white text-md font-bold">JavaScript</span>
      </div>
      <div className="flex flex-row gap-2 center items-center">
        <img
              src={python}
              alt="Project preview"
              className="relative w-[30px] md:w-[30px] rounded-xl shadow-2xl "
            />
      <span className="text-white text-md font-bold">Python</span>
      </div>
      <div className="flex flex-row gap-2 center items-center">
        <img
              src={firestore}
              alt="Project preview"
              className="relative w-[30px] md:w-[30px] rounded-xl shadow-2xl "
            />
      <span className="text-white text-md font-bold">Cloud Firestore</span>
      </div>
        </div>
      </section>

      <section className="bg-black flex flex-col gap-4 items-center">
      <span className="text-md font-bold text-gray-300 mb-6"> Project Gallery</span>

      {/* Carousel Wrapper */}
      <div className="relative w-full max-w-6xl flex items-center justify-center">

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-2 z-20 w-12 h-12 rounded-full
                     bg-white/10 backdrop-blur-md border border-orange-400/20
                     flex items-center justify-center hover:bg-white/20 transition"
        >
          <span className="text-xl text-orange-400">‹</span>
        </button>

        {/* Viewport */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {images.map((image) => (
              <div
                key={image.id}
                className="flex justify-center px-10"
              >
                <div
                  className="w-[200px] h-[200px] rounded-2xl overflow-hidden
                             bg-white/5 border border-white/10 shadow-2xl"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className=" h-full object-cover"
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-2 z-20 w-12 h-12 rounded-full
                     bg-white/10 backdrop-blur-md border border-orange-400/20
                     flex items-center justify-center hover:bg-orange-400/20 transition"
        >
          <span className="text-xl text-orange-400">›</span>
        </button>
      </div>

      {/* Dots */}

      <div className="flex gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, i)  => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-6 bg-orange-400"
                : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
        </section>

        <section className="bg-black w-full flex flex-col gap-4 items-center">
          <span className="text-sm font-bold text-gray-300 mb-6">Key Features</span>
          <div className="w-full flex flex-row gap-6 items-center justify-between">
          <div className="w-full flex flex-row gap-6 items-center justify-between border border-orange-400/20 p-4 rounded-xl bg-orange-500/5 shadow-md">
            <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center">
              <div className="p-2 items-center justify-center bg-orange-400 rounded-xl shadow-md">
              <FontAwesomeIcon className="text-white text-lg" icon={faMagnifyingGlass} />
              </div>
              <div className="w-full flex flex-col gap-1 justify-center">
                <span className="text-md text-center md:text-start font-bold text-orange-400">Explore Restaurants</span>
                <span className="text-sm text-center md:text-start text-gray-200">Browse by cuisine, location, and ratings</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row gap-6 items-center justify-between border border-orange-400/20 p-4 rounded-xl bg-orange-500/5 shadow-md">
          <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center">
          <div className="p-2 items-center justify-center bg-orange-400 rounded-xl shadow-md">
              <FontAwesomeIcon className="text-white text-lg" icon={faStar} />
              </div>
          <div className="w-full flex flex-col gap-1 justify-center">
          <span className="text-md text-center md:text-start font-bold text-orange-400">Explore Restaurants</span>
          <span className="text-sm text-center md:text-start text-gray-200">Browse by cuisine, location, and ratings</span>
          </div>
          </div>
          </div>

          <div className="w-full flex flex-row gap-6 items-center justify-between border border-orange-400/20 p-4 rounded-xl bg-orange-500/5 shadow-md">
          <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center">
          <div className="p-2 items-center justify-center bg-orange-400 rounded-xl shadow-md">
              <FontAwesomeIcon className="text-white text-lg" icon={faArrowLeft} />
              </div>
          <div className="w-full flex flex-col gap-1 justify-center">
          <span className="text-md text-center md:text-start font-bold text-orange-400">Explore Restaurants</span>
          <span className="text-sm text-center md:text-start text-gray-200">Browse by cuisine, location, and ratings</span>
          </div>
          </div>
          </div>
                </div>

        </section>

        <section className="bg-black w-full flex flex-row gap-4 items-center">
          <div className="w-full flex  items-center justify-center">
          <img
                src={python}
                alt="Project preview"
                className="relative w-[300px] md:w-[300px] shadow-2xl "
              />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-2">
          <span className="text-md text-start font-bold text-orange-400">About the project</span>
          <span className="text-sm text-start text-gray-200">Text</span>

          <div className="w-full flex flex-row gap-1 items-start justify-center">
            <div className="w-full flex flex-row gap-1 items-center">
              <FontAwesomeIcon className="text-orange-400 text-xs " icon={faCheck} />
              <span className="text-sm text-start text-gray-200">Feature 1</span>
            </div>
          </div>
          </div>
        </section>
    </div>
  );
}