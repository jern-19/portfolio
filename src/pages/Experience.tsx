
import Jern from '../assets/Jern.png';
import { ExperienceCard } from '../components/ExperienceCard';
import { TimelineItem } from '../components/TimelineItem';
import { useLanguage } from '../contex/LanguageContext';



function Experience() {
const { t } = useLanguage();

  const experiences = t.experience.items.map((item, index) => ({
    id: String(index + 1),
    year: item.year,
    icon: item.icon,
    title: item.title,
    subtitle: item.subtitle,
    description: item.description,
  }));
  
  return (
    <div className="w-full h-full flex flex-col gap-4 ">
      <div className="relative mx-auto max-w-4xl py-8">
      {experiences.map((experience, index) => (
        <TimelineItem
          key={experience.title}
          {...experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
    
    </div>
  );
}

export default Experience;