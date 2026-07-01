import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calculator1 from "../../assets/projects/calculator1.png";
import {
  faCalendar,
  faDatabase,
  faScaleBalanced,
  faBrain,
  faCode,
  faClock,
  faDesktop,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

export default function Calculator() {
  const details = [
    // {
    //   icon: faCalendar,
    //   label: "Date",
    //   value: "May 2024",
    // },
    {
      icon: faDatabase,
      label: "Category",
      value: "Web Application",
    },
    {
      icon: faCode,
      label: "Role",
      value: "Frontend Developer",
    },
    // {
    //   icon: faBrain,
    //   label: "Tech",
    //   value: "HTML, CSS, JavaScript",
    // },
    {
      icon: faClock,
      label: "Time Spent",
      value: "~1 week",
    },
  ];

  const featureData = [
  {
    title: "Key Features",
    type: "list",
    items: [
      "Basic operations: +, −, ×, ÷",
      "History of calculations",
      "Delete & clear functionality",
      "Responsive for all devices",
      "Clean and intuitive UI/UX",
    ],
  },
  {
    title: "Tech Stack",
    type: "tech",
    items: [
      {
        icon: "fa-brands fa-js",
        color: "text-yellow-400",
        title: "JavaScript",
        subtitle: "Logic & Functionality",
      },
      {
        icon: "fa-brands fa-html5",
        color: "text-orange-500",
        title: "HTML",
        subtitle: "Structure",
      },
      {
        icon: "fa-brands fa-css3-alt",
        color: "text-blue-500",
        title: "CSS",
        subtitle: "Styling & Layout",
      },
    ],
  },
  {
    title: "What I Learned",
    type: "list",
    items: [
      "DOM manipulation and event handling",
      "Implementing complex mathematical logic",
      "Designing responsive and user-friendly interfaces",
      "Improving problem-solving and debugging skills",
    ],
  },
];

  const accent = "oklch(78.9% 0.154 211.53)";
  const accentDark = "oklch(70% 0.13 211.53)";

  return (
    <div className="w-full h-screen flex flex-col gap-[100px] overflow-auto bg-black p-20 px-6">
      <section className="flex items-center bg-black">
        <div className="mx-auto flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="px-8 md:px-16 flex flex-col flex-1.5">
            {/* Title */}
            <div className="mt-8 flex flex-row items-center gap-4">
              <h1 className="text-5xl font-extrabold leading-none tracking-tight md:text-6xl">
                <span className="text-white">Calculator</span>
              </h1>
            </div>

            {/* Description */}
            <p className="mt-8 max-w-xl leading-8 text-gray-400">
              ChatOn allows users to create accounts, find friends, exchange
              messages, and share images instantly. The project was built to
              learn Firebase authentication, realtime synchronization, and
              Android application architecture.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.youtube.com/watch?v=niV8MlfizxU&t=3s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition hover:scale-105"
                style={{
                  background: `linear-gradient(to right, ${accent}, ${accentDark})`,
                }}
              >
                <i className="fa-solid fa-rocket"></i>
                Live Demo
                <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
              </a>

              <a
                href="https://github.com/jern-19/chatOn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-700 px-5 py-3 font-semibold text-white transition"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accent;
                  e.currentTarget.style.color = accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.color = "";
                }}
              >
                View on GitHub
                <i className="fa-brands fa-github text-lg"></i>
              </a>
            </div>

            {/* Details */}
            <div className="mt-10 space-y-6">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3 text-gray-400">
                    <FontAwesomeIcon className="text-[oklch(78.9%_0.154_211.53)] text-lg" icon={item.icon} />
                    <span>{item.label}</span>
                  </div>

                  <span className="text-gray-100">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="items-center justify-center flex flex-2">
            <img
              src={Calculator1}
              alt="Project preview"
              className="relative w-[900px] rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
<div className="w-full h-[1px] bg-gray-600"></div>
<div className="flex flex-row items-center justify-center gap-20 w-full">
<div className="flex flex-col items-start gap-4">
    <div className="flex flex-col items-start gap-1">
<span className="text-xl font-semibold text-white">About the Project</span>
    <div className="w-[50px] h-[2px] bg-cyan-400"></div>
    </div>
    
    <span className="text-gray-400">Details</span>  
</div>

<div className="flex flex-row items-center justify-center gap-8 border border-gray-800 bg-[#111111] p-8 shadow-xl mt-8 rounded-2xl">
<div className="flex flex-col items-center gap-2">
<FontAwesomeIcon icon={faDesktop} className="text-cyan-400" />
<span className="text-lg font-semibold text-white">Frontend</span>
</div>
<div className="flex flex-col items-center gap-2">
<FontAwesomeIcon icon={faDesktop} className="text-cyan-400" />
<span className="text-lg font-semibold text-white">Frontend</span>
</div>
<div className="flex flex-col items-center gap-2">
<FontAwesomeIcon icon={faDesktop} className="text-cyan-400" />
<span className="text-lg font-semibold text-white">Frontend</span>
</div>
</div>
</div>
      </section>

      <section className="flex flex-col items-center">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        {featureData.map((card, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B0B0B]/90 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
          >
            {/* Background Glow */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/5 blur-3xl" />

            {/* Title */}
            <h3 className="text-3xl font-semibold text-white">
              {card.title}
            </h3>

            {/* Cyan underline */}
            <div className="mt-4 mb-8 h-1 w-12 rounded-full bg-cyan-400" />

            {/* LIST */}
            {card.type === "list" && (
              <div className="space-y-6">
                {(card.items as string[]).map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400 text-cyan-400">
                      <i className="fa-solid fa-check text-[11px]" />
                    </div>

                    <p className="leading-7 text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            )}

            {/* TECH STACK */}
            {card.type === "tech" && (
              <div className="space-y-8">
                {(card.items as any[]).map((tech, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-900">
                      <i className={`${tech.icon} text-5xl ${tech.color}`} />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {tech.title}
                      </h4>

                      <p className="text-zinc-400">{tech.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Decorative Calculator Icon */}
            {index === 0 && (
              <div className="absolute bottom-5 right-5 opacity-20">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-zinc-700">
                  <i className="fa-solid fa-calculator text-4xl text-zinc-500" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
        </section>
    </div>
  );
}