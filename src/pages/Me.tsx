import { useEffect, useMemo, useState } from 'react';
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
} from '@dnd-kit/core';

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { SortableProfileCard } from '../components/SortableProfileCard';

import Jern from '../assets/Jern.png';
import { useLanguage } from '../contex/LanguageContext';

export default function Me() {
  const { t } = useLanguage();

 const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    setCards(
      t.me.cards.map((card, index) => ({
        id: String(index + 1),
        title: t.common.admin.name,
        subtitle: t.home.title,
        description: card,
        image: Jern,
      }))
    );
  }, [t]);

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
      <SortableContext items={cards} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-4 w-full">
          {cards.map((card) => (
            <SortableProfileCard key={card.id} card={card} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
