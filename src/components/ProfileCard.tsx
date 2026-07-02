interface ProfileCardProps {
  title: string;
  subtitle: string;
  description: {
    title?: string;
    text: string;
  };
  image: string;
  alt?: string;
}

export function ProfileCard({ title, subtitle, description, image, alt = "Profile" }: ProfileCardProps) {
  return (
    <div className="w-full rounded-3xl bg-zinc-800 p-5 flex flex-col justify-start border border-white/20 rounded-xl p-4 bg-[#2B2A2A] gap-4 shadow-md">
      <div className="flex gap-4 items-center">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white shadow-lg">
          <img src={image} alt={alt} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-white text-lg font-bold">{title}</span>
          <span className="text-white text-sm opacity-80">{subtitle}</span>
        </div>
      </div>

      <div className="flex flex-col">
        {description.title && (
          <span className="text-xl font-bold text-white">{description.title}</span>
        )}
        <span className="text-white opacity-90">{description.text}</span>
      </div>
    </div>
  );
}