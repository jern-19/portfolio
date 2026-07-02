export function ExperienceCard({ emoji, subtitle, descriptionTitle, description, timeline, image, alt = "Experience" }: ExperienceCardProps) {
  return (
    <div className="w-full flex flex-col justify-start border border-white/20 rounded-xl p-4 bg-[#2B2A2A] gap-4 shadow-md">

       <div className="flex flex-row justify-between">
            <span className="text-xl font-bold text-white">{emoji} {descriptionTitle}</span>
            <span className="text-xs text-white items-center">{timeline}</span>
        </div>
          

        <ul className="list-disc list-inside text-white opacity-90 space-y-1 ml-4">
        {(Array.isArray(description) ? description : [description]).map((item, i) => (
            <li key={i}>{item}</li>
        ))}
        </ul>
    </div>
  );
}

interface ExperienceCardProps {
  emoji: string;
  subtitle: string;
  descriptionTitle: string;
  timeline: string;
  description: string | string[];
  image: string;
  alt?: string;
}