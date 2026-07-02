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
    <div className="w-full h-screen flex flex-col gap-[100px] overflow-auto p-20 bg-black overflow-auto px-6">
      <section className="bg-black flex items-center">


      <div className=" mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">

       <div className="px-8 md:px-16">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-cyan-500/60 bg-cyan-500/10 px-5 py-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">
            Android App
          </span>
        </div>

        {/* Title */}
        <div className=" mt-8 flex flex-row items-center gap-4">

        <h1 className="text-5xl md:text-6xl font-extrabold leading-none tracking-tight">
          <span className="text-white">Chat</span>
          <span className="text-cyan-400">On</span>
        </h1>
        
        </div>
        

        {/* Subtitle */}
        <p className="mt-8 max-w-xl text-xl leading-relaxed text-gray-200">
          A real-time Android messaging application built with Firebase
          Realtime Database.
        </p>

        {/* Description */}
        <p className="mt-8 max-w-xl text-gray-400 leading-8">
          ChatOn allows users to create accounts, find friends,
          exchange messages, and share images instantly.
          The project was built to learn Firebase authentication,
          realtime synchronization, and Android application
          architecture.
        </p>
 <div className="mt-8 flex gap-4 justify-center md:justify-start">
             <a href="https://www.youtube.com/watch?v=niV8MlfizxU&t=3s" target="_blank" >
               <button className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition">
              Live Demo
            </button>
            </a>

            <a href="https://github.com/jern-19/chatOn" target="_blank" rel="noopener noreferrer">
                 <button className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition">
              GitHub
            </button>
            </a>

          
          </div>

          <div className="mt-8 flex gap-4 justify-center md:justify-start items-center">
            <div className="inline-flex items-center rounded-lg border border-gray-500 px-5 py-2">
            <span className="text-xs font-semibold tracking-widest  text-white">
                Android 
            </span>
            </div>
            <div className="bg-cyan-400 w-2 h-2 rounded-full"></div>
            <div className="inline-flex items-center rounded-lg border border-gray-500 px-5 py-2">
            <span className="text-xs font-semibold tracking-widest  text-white">
                Java 
            </span>
            </div>
            <div className="bg-cyan-400 w-2 h-2 rounded-full"></div>
            <div className="inline-flex items-center rounded-lg border border-gray-500 px-5 py-2">
            <span className="text-xs font-semibold tracking-widest  text-white">
                Firestore 
            </span>
            </div>
            <div className="bg-cyan-400 w-2 h-2 rounded-full"></div>
            <div className="inline-flex items-center rounded-lg border border-gray-500 px-5 py-2">
            <span className="text-xs font-semibold tracking-widest  text-white">
                Authentication 
            </span>
            </div>
          </div>
      </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full"></div>
            <img
              src={chatOn1}
              alt="Project preview"
              className="relative w-[600px]  rounded-xl shadow-2xl "
            />
          </div>
        </div>

      </div>
    </section>

    <section className="bg-black flex flex-col items-center">
      <span className="text-sm font-bold text-gray-300 mb-4">Features</span>
      <div className="bg-cyan-400 w-[50px] h-[2px] mb-6"></div>
        <div className="flex flex-row justify-between items-center gap-6 w-full">
        <div className="flex flex-col gap-4 border border-gray-700 rounded-xl p-4 bg-[#1A1A1A] shadow-md w-full items-center">
<FontAwesomeIcon icon={faCheck} className="text-cyan-400 text-3xl" />
<span className="text-gray-300 text-md">User Authentication</span>
<span className="text-gray-400 text-sm">Secure login and registration system for users.</span>
        </div>

        <div className="flex flex-col gap-4 border border-gray-700 rounded-xl p-4 bg-[#1A1A1A] shadow-md  w-full items-center">
<FontAwesomeIcon icon={faCheck} className="text-cyan-400 text-3xl text-center" />
<span className="text-gray-300 text-md">User Authentication</span>
<span className="text-gray-400 text-sm">Secure login and registration system for users.</span>
        </div>

        <div className="flex flex-col gap-4 border border-gray-700 rounded-xl p-4 bg-[#1A1A1A] shadow-md  w-full items-center">
<FontAwesomeIcon icon={faCheck} className="text-cyan-400 text-3xl" />
<span className="text-gray-300 text-md">User Authentication</span>
<span className="text-gray-400 text-sm">Secure login and registration system for users.</span>
        </div>
        <div className="flex flex-col gap-4 border border-gray-700 rounded-xl p-4 bg-[#1A1A1A] shadow-md  w-full items-center">
<FontAwesomeIcon icon={faCheck} className="text-cyan-400 text-3xl" />
<span className="text-gray-300 text-md">User Authentication</span>
<span className="text-gray-400 text-sm">Secure login and registration system for users.</span>
        </div>
        </div>
    </section>

    <section className="bg-black flex flex-col ">
     <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

          <div className="grid items-center gap-16 lg:grid-cols-2 items-center justify-center">

            {/* Phone */}

            <div className="relative flex h-[500px]  items-center justify-center">

              <div className="absolute rounded-full bg-cyan-500/10 blur-3xl items-center justify-center" />

              <AnimatePresence mode="wait">
                <motion.img
                  key={steps[active].image}
                  src={steps[active].image}
                  alt=""
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: .3 }}
                  className="relative z-10 h-[450px] w-[250px] "
                />
              </AnimatePresence>

            </div>

            {/* Details */}

            <div className="w-[550px]">

              <p className="mb-2 text-sm text-cyan-400">
                Step {String(active + 1).padStart(2, "0")}
              </p>

              <h3 className="text-2xl font-bold text-white">
                {steps[active].title}
              </h3>

              <p className="mt-4 max-w-md leading-8 text-zinc-400">
                {steps[active].description}
              </p>

              <div className="mt-6 space-y-4 ">

                {steps.map((step, index) => (
                  <button
                    key={step.title}
                    onClick={() => setActive(index)}
                    className={`flex w-full items-center justify-between rounded-xl border p-3 transition
                    ${
                      active === index
                        ? "border-cyan-500 bg-cyan-500/10"
                        : "border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center gap-4">

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full
                        ${
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

                    <FontAwesomeIcon icon={faChevronRight} className="text-zinc-600" />
                  </button>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

        </section>

      <section className="bg-black flex flex-col items-center">
         <span className="text-sm font-bold text-gray-300 mb-4">Tech Stack</span>
      <div className="bg-cyan-400 w-[50px] h-[2px] mb-6"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
      <InfoCard title="Challenges" items={challenges} />
      <InfoCard title="What I Learned" items={learned} />
    </div>
        </section>
    </div>
  );
}