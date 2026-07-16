import restaurantRating1 from '../../assets/restaurantRating1.png';
import react from '../../assets/react.png';
import js from '../../assets/js.png';
import python from '../../assets/python.png';
import firestore from '../../assets/firestore.svg';
import angular from '../../assets/angular.png';
import restaurantRatingGallery1 from '../../assets/restaurantRatingGallery1.png';
import restaurantRatingGallery2 from '../../assets/restaurantRatingGallery2.png';
import restaurantRatingGallery3 from '../../assets/restaurantRatingGallery3.png';
import restaurantRatingGallery4 from '../../assets/restaurantRatingGallery4.png';
import restaurantRatingGallery5 from '../../assets/restaurantRatingGallery5.png';
import restaurantRatingGallery6 from '../../assets/restaurantRatingGallery6.png';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../../contex/LanguageContext';
import FeatureCard from '../../components/projects/FeatureCard';
import { preloadImages } from "../../utils/preload"
import RestaurantRatingsSkeleton from '../../components/skeletons/RestaurantRatingsSkeleton';

export default function RestaurantRatings() {
  const { t } = useLanguage();
  const images = [
    { id: 1, title: '1', url: restaurantRatingGallery1 },
    { id: 2, title: '2', url: restaurantRatingGallery2 },
    { id: 3, title: '3', url: restaurantRatingGallery3 },
    { id: 4, title: '4', url: restaurantRatingGallery4 },
    { id: 5, title: '5', url: restaurantRatingGallery5 },
    { id: 6, title: '6', url: restaurantRatingGallery6 },
  ];

const imagesToPreload = [
  restaurantRating1,
  restaurantRatingGallery1,
  restaurantRatingGallery2,
  restaurantRatingGallery3,
  restaurantRatingGallery4,
  restaurantRatingGallery5,
  restaurantRatingGallery6,
];

  const [index, setIndex] = useState(0);

  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItems();

    window.addEventListener('resize', updateItems);

    return () => window.removeEventListener('resize', updateItems);
  }, []);

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

  const [loaded, setLoaded] = useState(false);

useEffect(() => {
  preloadImages(imagesToPreload).then(() => {
    setLoaded(true);
  });
}, []);

if (!loaded) {
  return (
    <RestaurantRatingsSkeleton />
  );
}

  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col gap-16 md:gap-24 bg-black px-4 sm:px-6 lg:px-20 py-10 md:py-16">
      <section className="bg-black flex items-center">
      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* TEXT */}
        <div className="flex-1 text-center lg:text-left">

          <p className="text-orange-400 uppercase tracking-widest text-sm mb-4">
            {t.restaurantRatings.hero.tag}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            {t.restaurantRatings.hero.title1}{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {t.restaurantRatings.hero.title2}
            </span>
          </h1>


          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            {t.restaurantRatings.hero.description}
          </p>


          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <a
              href="https://www.youtube.com/watch?v=mWvquhIx6nQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition">
                {t.restaurantRatings.hero.button}
              </button>
            </a>


            <a
              href="https://github.com/jern-19/Restaurants_Reviews_Rating"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-orange-500 text-orange-400 hover:bg-orange-500/10 transition">
                {t.common.github}
              </button>
            </a>

          </div>

        </div>



        {/* IMAGE */}
        <div className="flex-1 flex justify-center">

          <div className="relative">

            <div className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-full" />

            <img
              src={restaurantRating1}
              alt="Restaurant rating preview"
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-2xl border border-orange-500/30"
            />

          </div>

        </div>


      </div>
    </section>

      <section className=" bg-black flex flex-col gap-1 items-center p-4 border border-orange-500/30 bg-orange-500/5 rounded-xl">
        <span className="text-sm font-bold text-gray-300 mb-6">
          {t.restaurantRatings.technologies.title}
        </span>
        <div className="w-full flex flex-wrap justify-center md:justify-between gap-6">
          <div className="flex items-center gap-2 w-full sm:w-[140px] justify-center">
            <img
              src={react}
              alt="Project preview"
              className="relative w-[30px] md:w-[30px] rounded-xl shadow-2xl "
            />
            <span className="text-white text-md font-bold">
              {t.common.technologies.reactNative}
            </span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-[140px] justify-center">
            <img
              src={js}
              alt="Project preview"
              className="relative w-[30px] md:w-[30px] rounded-xl shadow-2xl "
            />
            <span className="text-white text-md font-bold">
              {t.common.technologies.javascript}
            </span>
          </div>
          <div className="flex items-center gap-2 w-[140px] justify-center">
            <img
              src={python}
              alt="Project preview"
              className="relative w-[30px] md:w-[30px] rounded-xl shadow-2xl "
            />
            <span className="text-white text-md font-bold">
              {t.common.technologies.python}
            </span>
          </div>
          <div className="flex items-center gap-2 w-[140px] justify-center">
            <img
              src={firestore}
              alt="Project preview"
              className="relative w-[30px] md:w-[30px] rounded-xl shadow-2xl "
            />
            <span className="text-white text-md font-bold">
              {t.common.technologies.firebase}
            </span>
          </div>
          <div className="flex items-center gap-2 w-[140px] justify-center">
            <img
              src={angular}
              alt="Project preview"
              className="relative w-[30px] md:w-[30px] rounded-xl shadow-2xl "
            />
            <span className="text-white text-md font-bold">
              {t.common.technologies.angular}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-black flex flex-col gap-4 items-center">
        <span className="text-md font-bold text-gray-300 mb-6">
          {t.restaurantRatings.gallery.title}
        </span>

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
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="flex flex-wrap justify-center"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                {visibleImages.map((image, i) => (
                  <motion.div
                    key={image.id}
                    className={`px-3 flex justify-center ${
                      itemsPerPage === 1
                        ? 'w-full'
                        : itemsPerPage === 2
                          ? 'w-1/2'
                          : 'w-1/4'
                    }`}
                    initial={{ opacity: 0, y: 25, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.35,
                    }}
                  >
                    <div className="w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
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

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, page) => (
            <button
              key={page}
              onClick={() => setIndex(page)}
              className={`transition-all duration-300 rounded-full ${
                page === index ? 'w-6 h-2 bg-orange-400' : 'w-2 h-2 bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

    <section className="bg-black w-full flex flex-col gap-8 items-center px-2 sm:px-4">

  <span className="text-sm md:text-base font-bold text-gray-300 text-center">
    Key Features
  </span>

  <div className="
    w-full
    max-w-6xl
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-4
    sm:gap-6
  ">
    {t.restaurantRatings.keyFeatures.items.map(
      (
        feature: { 
          title: string; 
          description: string; 
          icon: any 
        }
      ) => (
        <FeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      )
    )}
  </div>

</section>
    </div>
  );
}
