import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import chatOn1 from '../../assets/projects/chatOn1.png';
import chatOnSS1 from '../../assets/projects/chatOnSS1.png';
import chatOnSS2 from '../../assets/projects/ChatOnSS2.png'
import chatOnSS3 from '../../assets/projects/ChatOnSS3.png';
import chatOnSS4 from '../../assets/projects/chatOnSS4.png';
import chatOnSS5 from '../../assets/projects/chatOnSS5.png';
import chatOnLogo from '../../assets/projects/chatOnLogoNoTitle.png';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from "framer-motion";


import {
  faUserPlus,
  faLock,
  faMagnifyingGlass,
  faComments,
  faMessage,
  faImage,
  faArrowRight,
  faCommentDots,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';
import InfoCard from '../../components/InfoCard';


const gallery = [
  { image: chatOnSS1, label: "Login/Register", description: "Users can create an account or log in to access the app's features." },
  { image: chatOnSS2, label: "Create Profile", description: "Users can create a profile to personalize their experience." },
  { image: chatOnSS3, label: "Find Friends", description: "Users can search for and add friends to their contact list." },
  { image: chatOnSS4, label: "Send Messages", description: "Users can send text messages in real-time to their friends." },
  { image: chatOnSS5, label: "Send Images", description: "Users can share images with their friends instantly." },
];

const steps = [
  {
    title: "Create Account",
    description:
      "Create an account securely using Firebase Authentication.",
    image: chatOnSS1,
    icon: faUserPlus,
  },
  {
    title: "Login",
    description:
      "Authenticate and access your conversations instantly.",
    image: chatOnSS2,
    icon: faLock,
  },
  {
    title: "Find Friends",
    description:
      "Search users and connect with new friends.",
    image: chatOnSS3,
    icon: faMagnifyingGlass,
  },
  {
    title: "Open Chat",
    description:
      "Start private conversations in real time.",
    image: chatOnSS4,
    icon: faComments,
  },
  {
    title: "Send Message",
    description:
      "Exchange text messages instantly.",
    image: chatOnSS5,
    icon: faCommentDots,
  },
];

const challenges = [
  "Synchronizing messages in real time across multiple devices.",
  "Designing a simple and scalable Firebase data structure.",
  "Handling image uploads efficiently and securely.",
  "Managing user authentication and session persistence.",
  "Ensuring smooth UI/UX on various Android devices.",
];

const learned = [
  "Firebase Authentication and user management.",
  "Realtime Database and live data synchronization.",
  "Image upload and retrieval using Firebase Storage.",
  "RecyclerView and modern Android UI patterns.",
  "Android app lifecycle and activity management.",
];


export default function ChatApplication() {
    const [active, setActive] = useState(0);
  return (
    <div className="w-full flex flex-col gap-[100px] p-20 bg-black  px-6">
      <section className="w-full">
  <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 lg:flex-row">
    {/* Left Side */}
    <div className="w-full lg:flex-1">
      <div className="inline-flex items-center rounded-full border border-cyan-500/60 bg-cyan-500/10 px-5 py-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
          Android App
        </span>
      </div>

      <h1 className="mt-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
        Chat<span className="text-cyan-400">On</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">
        A real-time Android messaging application built with Firebase
        Realtime Database.
      </p>

      <p className="mt-6 max-w-xl leading-8 text-gray-400">
        ChatOn allows users to create accounts, find friends, exchange
        messages, and share images instantly. The project was built to learn
        Firebase Authentication, Realtime Database synchronization, and Android
        application architecture.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="https://www.youtube.com/watch?v=niV8MlfizxU&t=3s"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-cyan-600"
        >
          Live Demo
        </a>

        <a
          href="https://github.com/jern-19/chatOn"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-cyan-500 px-6 py-3 text-center font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
        >
          GitHub
        </a>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {["Android", "Java", "Firestore", "Authentication"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-white"
          >
            {item}
          </span>
        ))}
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
        Features
      </p>

      <div className="mx-auto mt-4 h-1 w-16 rounded bg-cyan-400"></div>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {[
        "User Authentication",
        "Realtime Messaging",
        "Image Sharing",
        "Friend Management",
      ].map((feature) => (
        <div
          key={feature}
          className="rounded-2xl border border-zinc-800 bg-[#111] p-6 text-center transition hover:border-cyan-400"
        >
          <FontAwesomeIcon
            icon={faCheck}
            className="mb-5 text-3xl text-cyan-400"
          />

          <h3 className="text-lg font-semibold text-white">
            {feature}
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            Secure login and registration system with Firebase and realtime
            synchronization.
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
              key={steps[active].image}
              src={steps[active].image}
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
            Step {String(active + 1).padStart(2, "0")}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {steps[active].title}
          </h2>

          <p className="mt-4 max-w-xl leading-8 text-zinc-400">
            {steps[active].description}
          </p>

          <div className="mt-8 space-y-4">
            {steps.map((step, index) => (
              <button
                key={step.title}
                onClick={() => setActive(index)}
                className={`flex w-full items-center justify-between rounded-xl border p-4 transition ${
                  active === index
                    ? "border-cyan-500 bg-cyan-500/10"
                    : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      active === index
                        ? "bg-cyan-500 text-black"
                        : "bg-zinc-900 text-zinc-500"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <span className="text-white">
                    {step.title}
                  </span>
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
    <div className="mb-10 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
        Tech Stack
      </p>

      <div className="mx-auto mt-4 h-1 w-16 rounded bg-cyan-400"></div>
    </div>

    <div className="grid gap-8 lg:grid-cols-2">
      <InfoCard title="Challenges" items={challenges} />
      <InfoCard title="What I Learned" items={learned} />
    </div>
  </div>
</section>
    </div>
  );
}