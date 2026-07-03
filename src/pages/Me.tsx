import { useState } from "react";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { ProfileCard } from "../components/ProfileCard";
import { SortableProfileCard } from "../components/SortableProfileCard";

import Jern from "../assets/Jern.png";

export default function Me() {
  const [cards, setCards] = useState([
    {
      id: "1",
      title: "Jern",
      subtitle: "Full Stack Software Engineer",
      description: {
        title: "Hi!",
        text: "Welcome to my space 👋🏾 Sharing my experience, projects, and journey in software engineering.",
      },
      image: Jern,
    },
    {
      id: "2",
      title: "Jern",
      subtitle: "Full Stack Software Engineer",
      description: {
        text: "I'm a Full Stack Software Engineer with 4+ years of experience. I build web applications from frontend to backend.",
      },
      image: Jern,
    },
    {
      id: "3",
      title: "Jern",
      subtitle: "Full Stack Software Engineer",
      description: {
        text: "I'm a big fan of React development. I enjoy building clean, interactive user interfaces and improving user experience.",
      },
      image: Jern,
    },
    {
      id: "4",
      title: "Jern",
      subtitle: "Full Stack Software Engineer",
      description: {
        text: "I also enjoy building APIs with Node.js and designing scalable backend architectures.",
      },
      image: Jern,
    },
    {
      id: "5",
      title: "Jern",
      subtitle: "Full Stack Software Engineer",
      description: {
        title: "Fun Fact ☕",
        text: "I moved to Munich for an internship and ended up staying, where I've been working as a Full Stack Software Engineer for 4+ years.",
      },
      image: Jern,
    },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setCards((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);

      return arrayMove(items, oldIndex, newIndex);
    });
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={cards}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col gap-4 w-full">
          {cards.map((card) => (
            <SortableProfileCard key={card.id} card={card} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}