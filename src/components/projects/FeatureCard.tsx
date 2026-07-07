import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type FeatureCardProps = {
  icon: IconDefinition;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="border border-orange-400/20 rounded-xl bg-orange-500/5 shadow-md p-6 hover:border-orange-400 transition">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <div className="w-12 h-12 rounded-xl bg-orange-400 flex items-center justify-center shrink-0">
          <FontAwesomeIcon className="text-white text-lg" icon={icon} />
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-orange-400">{title}</h3>

          <p className="mt-2 text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
