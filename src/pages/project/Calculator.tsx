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
    <div className="w-full flex flex-col gap-[100px] bg-black p-20 px-6">
     <section className="w-full">
  <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 lg:flex-row">
    {/* Left */}
    <div className="w-full lg:flex-1">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Calculator
        </h1>
      </div>

      <p className="mt-6 max-w-xl leading-7 text-gray-400">
        ChatOn allows users to create accounts, find friends, exchange
        messages, and share images instantly. The project was built to
        learn Firebase authentication, realtime synchronization, and
        Android application architecture.
      </p>

      <div className="mt-8 flex w-full max-w-xl flex-col gap-4 sm:flex-row">
        <a
          href="https://www.youtube.com/watch?v=niV8MlfizxU&t=3s"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition hover:scale-105 sm:flex-1"
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
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-5 py-3 font-semibold text-white transition sm:flex-1"
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

      <div className="mt-10 space-y-5">
        {details.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between border-b border-zinc-800 pb-4"
          >
            <div className="flex items-center gap-3 text-gray-400">
              <FontAwesomeIcon
                icon={item.icon}
                className="text-lg text-cyan-400"
              />
              <span>{item.label}</span>
            </div>

            <span className="text-right text-white">{item.value}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Image */}
    <div className="flex w-full justify-center lg:flex-1">
      <img
        src={Calculator1}
        alt="Project preview"
        className="w-full max-w-2xl rounded-2xl shadow-2xl"
      />
    </div>
  </div>
</section>

  <section className="w-full">
  <div className="mx-auto flex max-w-7xl flex-col gap-10">
    <div className="h-px w-full bg-gray-700"></div>

    <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
      <div>
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold text-white">
            About the Project
          </span>

          <div className="h-[2px] w-16 bg-cyan-400"></div>
        </div>

        <p className="mt-4 max-w-lg text-gray-400">
          Details
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 rounded-2xl border border-gray-800 bg-[#111111] p-6 sm:grid-cols-3 lg:w-auto">
        <div className="flex flex-col items-center gap-3 text-center">
          <FontAwesomeIcon
            icon={faDesktop}
            className="text-3xl text-cyan-400"
          />

          <span className="font-semibold text-white">
            Frontend
          </span>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <FontAwesomeIcon
            icon={faServer}
            className="text-3xl text-cyan-400"
          />

          <span className="font-semibold text-white">
            Backend
          </span>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <FontAwesomeIcon
            icon={faDatabase}
            className="text-3xl text-cyan-400"
          />

          <span className="font-semibold text-white">
            Database
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

  <section className="w-full">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
    {featureData.map((card, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B0B0B]/90 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 lg:p-8"
      >
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/5 blur-3xl"></div>

        <h3 className="text-2xl font-semibold text-white lg:text-3xl">
          {card.title}
        </h3>

        <div className="mb-8 mt-4 h-1 w-12 rounded-full bg-cyan-400"></div>

        {card.type === "list" && (
          <div className="space-y-5">
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

        {card.type === "tech" && (
          <div className="space-y-8">
            {(card.items as any[]).map((tech, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 lg:h-14 lg:w-14">
                  <i className={`${tech.icon} ${tech.color} text-4xl`} />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white lg:text-xl">
                    {tech.title}
                  </h4>

                  <p className="text-zinc-400">{tech.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {index === 0 && (
          <div className="absolute bottom-5 right-5 opacity-20">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-zinc-700">
              <i className="fa-solid fa-calculator text-4xl text-zinc-500"></i>
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