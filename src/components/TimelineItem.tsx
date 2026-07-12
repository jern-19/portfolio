import { motion } from 'framer-motion';

type Props = {
  year: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  isLast: boolean;
  isCurrent?: boolean;
};

export function TimelineItem({
  year,
  icon,
  title,
  subtitle,
  description,
  isLast,
  isCurrent,
}: Props) {
  return (
    <motion.div
      className="relative flex gap-8 pb-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {/* Timeline */}

      <div className="flex w-[162px] flex-col items-center">
        <span className="w-full bg-violet-500/10 px-3 py-1 text-sm font-semibold text-violet-300 text-center">
          {year}
        </span>

        <div className="my-4 flex h-12 w-12 items-center justify-center rounded-full border border-violet-500 bg-zinc-900 text-2xl shadow-lg shadow-violet-500/20">
          {icon}
        </div>

        {!isLast && (
          <motion.div
            className="w-px flex-1 bg-gradient-to-b from-violet-500 to-zinc-700 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        )}
      </div>

      {/* Card */}

      <div className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/10">
        <div className="flex items-center gap-3">
          <p className="text-sm font-medium text-violet-400">{subtitle}</p>

          {isCurrent && (
            <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-semibold text-emerald-400">
              Current
            </span>
          )}
        </div>

        <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>

        <p className="mt-4 leading-7 text-zinc-400">{description}</p>
      </div>
    </motion.div>
  );
}
