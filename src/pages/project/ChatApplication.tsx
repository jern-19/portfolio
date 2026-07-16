import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import chatOn1 from '../../assets/projects/chatOn1.png';

import { AnimatePresence, motion } from 'framer-motion';

import { faChevronRight} from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';
import InfoCard from '../../components/InfoCard';
import { useLanguage } from '../../contex/LanguageContext';
import { preloadImages } from '../../utils/preload';
import ChatApplicationSkeleton from '../../components/skeletons/ChatApplicationSkeleton';


export default function ChatApplication() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

    const [loaded, setLoaded] = useState(false);
    
  const imagesToPreload = [
  chatOn1,
  ...t.chatOn.workflow.map((step) => step.image),
];

  useEffect(() => {
    preloadImages(imagesToPreload).then(() => {
      setLoaded(true);
    });
  }, []);
  
  if (!loaded) {
    return (
      <ChatApplicationSkeleton />
    );
  }
  
  return (
    <div className="w-full flex flex-col gap-[100px] p-20 bg-black  px-6">
      <section className="w-full">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 lg:flex-row">
          {/* Left Side */}
          <div className="w-full lg:flex-1">
            <div className="inline-flex items-center rounded-full border border-cyan-500/60 bg-cyan-500/10 px-5 py-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                {t.chatOn.tag}
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t.chatOn.title1}
              <span className="text-cyan-400">{t.chatOn.title2}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">
              {t.chatOn.subTitle}
            </p>

            <p className="mt-6 max-w-xl leading-8 text-gray-400">
              {t.chatOn.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.youtube.com/watch?v=niV8MlfizxU&t=3s"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-cyan-600"
              >
                {t.chatOn.button}
              </a>

              <a
                href="https://github.com/jern-19/chatOn"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-cyan-500 px-6 py-3 text-center font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
              >
                {t.chatOn.viewOnGitHub}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {t.chatOn.techStack.map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-white"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex w-full justify-center lg:flex-1">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"></div>

              <img
                src={chatOn1}
                alt="ChatOn"
                className="relative w-full max-w-md rounded-2xl shadow-2xl lg:max-w-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
              {t.chatOn.features.title}
            </p>

            <div className="mx-auto mt-4 h-1 w-16 rounded bg-cyan-400"></div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {t.chatOn.features.items.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-800 bg-[#111] p-6 text-center transition hover:border-cyan-400"
              >
                <FontAwesomeIcon
                  icon={feature.icon as any}
                  className="mb-5 text-3xl text-cyan-400"
                />

                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 lg:p-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={t.chatOn.workflow[active].image}
                    src={t.chatOn.workflow[active].image}
                    alt=""
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="w-56 sm:w-64 lg:w-72"
                  />
                </AnimatePresence>
              </div>

              <div className="w-full">
                <p className="text-sm text-cyan-400">
                  Step {String(active + 1).padStart(2, '0')}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {t.chatOn.workflow[active].title}
                </h2>

                <p className="mt-4 max-w-xl leading-8 text-zinc-400">
                  {t.chatOn.workflow[active].description}
                </p>

                <div className="mt-8 space-y-4">
                  {t.chatOn.workflow.map((step, index) => (
                    <button
                      key={step.title}
                      onClick={() => setActive(index)}
                      className={`flex w-full items-center justify-between rounded-xl border p-4 transition ${
                        active === index
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${
                            active === index
                              ? 'bg-cyan-500 text-black'
                              : 'bg-zinc-900 text-zinc-500'
                          }`}
                        >
                          {index + 1}
                        </div>

                        <span className="text-white">{step.title}</span>
                      </div>

                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-zinc-500"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <InfoCard title="Challenges" items={t.chatOn.challenges} />
            <InfoCard title="What I Learned" items={t.chatOn.learned} />
          </div>
        </div>
      </section>
    </div>
  );
}
