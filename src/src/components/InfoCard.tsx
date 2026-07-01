export default function InfoCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div
      className="
        rounded-2xl
        border border-gray-800
        bg-[#101010]
        p-8
        shadow-[0_0_40px_rgba(0,0,0,0.3)]
        transition-all
        duration-300
        hover:border-cyan-400/30
      "
    >
      <h3 className="text-3xl font-bold text-white">{title}</h3>

      <div className="mt-3 mb-7 h-1 w-14 rounded-full bg-cyan-400" />

      <ul className="space-y-5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-4 text-gray-300 leading-relaxed"
          >
            <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20">
              <i className="fa-solid fa-check text-cyan-400 text-xs"></i>
            </div>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}