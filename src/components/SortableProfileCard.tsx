import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { ProfileCard } from "./ProfileCard";

export function SortableProfileCard({ card }: { card: any }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        relative
        transition-all
        duration-200
        ${isDragging ? "scale-[1.02] rotate-1  shadow-2xl opacity-90" : ""}
      `}
    >
      {/* Drag Handle */}
      <button
        {...attributes}
        {...listeners}
        className="
          absolute
          top-5
          right-5
          rounded-lg
          bg-neutral-700
          p-2
          text-white
          cursor-grab
          active:cursor-grabbing
          hover:bg-neutral-600
        "
      >
        <FontAwesomeIcon icon={faGripVertical} size="lg" />
      </button>

      <ProfileCard {...card} />
    </div>
  );
}