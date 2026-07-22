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
import FeaturedProjectCard from '../components/meCards/FeaturedProjectCard';
import FeaturedProjectCardImage1 from '../assets/projects/classificationOfRecyclingCard.png'
import FeaturedProjectCardImage2 from '../assets/projects/chatOnCard.png'
import FeaturedProjectCardImage3 from '../assets/projects/restaurantRatingCard.png'
import QuoteCard from '../components/meCards/QuoteCard';
import DayInMyLifeCard from '../components/meCards/DayInMyLifeCard';
import WhatImLearningCard from '../components/meCards/WhatImLearningCard';


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
        <div className="flex flex-col gap-4 max-w-[900px]">
          {/* <QuoteCard
            quote="I enjoy solving challenging problems, learning new technologies, and creating software that turns ideas into useful and meaningful experiences."
          />
<div className='flex flex-col gap-4'>
     <DayInMyLifeCard />
          <WhatImLearningCard />

</div>
     
          <FeaturedProjectCard
            title={t.navbar.projects}
            description="Here are something I have built. Each project is a new adventure."
            images={[
              FeaturedProjectCardImage1,
              FeaturedProjectCardImage2,
              FeaturedProjectCardImage3,
            ]}
          /> */}
          {cards.map((card) => (
            <SortableProfileCard key={card.id} card={card} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
