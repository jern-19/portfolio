import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faLaptopCode,
  faBug,
  faUtensils,
  faUsers,
  faCode,
  faBook,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

const schedule = [
  {
    time: "08:00",
    title: "First coffee",
    icon: faMugHot,
  },
  {
    time: "09:00",
    title: "Building features",
    icon: faLaptopCode,
  },
  {
    time: "11:00",
    title: "Hunting bugs",
    icon: faBug,
  },
  {
    time: "13:00",
    title: "Lunch & recharge",
    icon: faUtensils,
  },
  {
    time: "14:00",
    title: "Team discussions",
    icon: faUsers,
  },
  {
    time: "16:00",
    title: "Code reviews",
    icon: faCode,
  },
  {
    time: "17:30",
    title: "Learning something new",
    icon: faBook,
  },
  {
    time: "21:00",
    title: "Games or Netflix",
    icon: faGamepad,
  },
];

export default function DayInMyLifeCard() {
  const currentHour = new Date().getHours();

  return (
    <div
      className="
        rounded-3xl
        border
        border-neutral-800
        bg-neutral-900
        p-6
        transition-all
        duration-300
        hover:border-[#7DA876]
      "
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="text-yellow-400">☀️</span>

        <h2 className="text-xl font-bold text-white">
          A Day in My Life
        </h2>
      </div>

      <div className="space-y-4">
        {schedule.map((item) => {
          const hour = Number(item.time.split(":")[0]);

          const active = currentHour >= hour && currentHour < hour + 2;

          return (
            <div
              key={item.time}
              className={`
                flex
                items-center
                gap-4
                rounded-xl
                px-3
                py-2
                transition-all
                duration-300
                ${
                  active
                    ? "bg-[#7DA876]/10"
                    : "hover:bg-neutral-800"
                }
              `}
            >
              <span className="w-12 text-sm text-neutral-500">
                {item.time}
              </span>

              <FontAwesomeIcon
                icon={item.icon}
                className={`
                  w-4
                  ${
                    active
                      ? "text-[#7DA876]"
                      : "text-neutral-400"
                  }
                `}
              />

              <span
                className={`
                  text-sm
                  ${
                    active
                      ? "text-white font-medium"
                      : "text-neutral-300"
                  }
                `}
              >
                {item.title}
              </span>

              {active && (
                <div className="ml-auto h-2 w-2 rounded-full bg-[#7DA876] animate-pulse" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}