import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import Calculator1 from '../../assets/projects/calculator1.png';
import {
  faDatabase,
  faCode,
  faClock,
  faDesktop,
  faServer,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../contex/LanguageContext';

export default function Calculator() {
  const { t } = useLanguage();

  const icons = {
    desktop: faDesktop,
    server: faServer,
    database: faDatabase,
    cloud: faCloud,
    code: faCode,
    clock: faClock,
  };

  const projectDetails = t.calculator.details.map((detail) => ({
    icon: icons[detail.icon as keyof typeof icons] ?? faDatabase,
    label: detail.label,
    value: detail.value,
  }));

  type FeatureCard =
    | {
        title: string;
        type: 'list';
        items: readonly string[];
      }
    | {
        title: string;
        type: 'tech';
        items: {
          icon: keyof typeof icons;
          color: string;
          title: string;
          subtitle: string;
        }[];
      };

  const featureData: FeatureCard[] = [
    {
      title: t.calculator.keyFeatures.title,
      type: 'list',
      items: t.calculator.keyFeatures.items,
    },
    {
      title: t.calculator.techStack.title,
      type: 'tech',
      items: t.calculator.techStack.items.map((tech) => ({
        icon: tech.icon as keyof typeof icons,
        color: tech.color,
        title: tech.title,
        subtitle: tech.subtitle,
      })),
    },
    {
      title: t.calculator.whatILearned.title,
      type: 'list',
      items: t.calculator.whatILearned.items,
    },
  ];

  const accent = 'oklch(78.9% 0.154 211.53)';
  const accentDark = 'oklch(70% 0.13 211.53)';

  return (
    <div className="w-full flex flex-col gap-[100px] bg-black p-20 px-6">
      <section className="w-full">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 lg:flex-row">
          {/* Left */}
          <div className="w-full lg:flex-1">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                {t.calculator.title}
              </h1>
            </div>

            <p className="mt-6 max-w-xl leading-7 text-gray-400">
              {t.calculator.description}
            </p>

            <div className="mt-8 flex w-full max-w-xl flex-col gap-4 sm:flex-row">
              <a
                href="https://www.youtube.com/watch?v=GsF8Dt2YFko"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition hover:scale-105 sm:flex-1"
                style={{
                  background: `linear-gradient(to right, ${accent}, ${accentDark})`,
                }}
              >
                <i className="fa-solid fa-rocket"></i>
                {t.calculator.button}
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
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.color = '';
                }}
              >
                {t.calculator.viewOnGitHub}
                <i className="fa-brands fa-github text-lg"></i>
              </a>
            </div>

            <div className="mt-10 space-y-5">
              {projectDetails.map((item) => (
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
                  {t.calculator.aboutTheProject.title}
                </span>

                <div className="h-[2px] w-16 bg-cyan-400"></div>
              </div>

              <p className="mt-4 max-w-lg text-gray-400">
                {t.calculator.aboutTheProject.description}
              </p>
            </div>

            {t.calculator.aboutTheProject.tools.map(
              (tool: { label: string; icon: IconDefinition }) => (
                <div
                  key={tool.label}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <FontAwesomeIcon
                    icon={tool.icon}
                    className="text-3xl text-cyan-400"
                  />

                  <span className="font-semibold text-white">{tool.label}</span>
                </div>
              )
            )}
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

              {card.type === 'list' && (
                <div className="space-y-5">
                  {(card.items as unknown as string[]).map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400 text-cyan-400">
                        <i className="fa-solid fa-check text-[11px]" />
                      </div>

                      <p className="leading-7 text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {card.type === 'tech' && (
                <div className="space-y-8">
                  {card.items.map((tech, i) => (
                    <div key={i} className="flex items-center gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 lg:h-14 lg:w-14">
                        <FontAwesomeIcon
                          icon={icons[tech.icon]}
                          className=" text-4xl text-cyan-400"
                        />
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
