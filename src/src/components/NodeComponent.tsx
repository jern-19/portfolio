import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface NodeProps {
  title: string;
  description: string;
  icon: IconDefinition;
}

export default function NodeComponent({
  title,
  description,
  icon,
}: NodeProps) {
  return (
    <div className="w-72 rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10">
          <FontAwesomeIcon
            icon={icon}
            className="text-orange-400 text-2xl"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="text-sm text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}