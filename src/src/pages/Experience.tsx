
import Jern from '../assets/Jern.png';
import { ExperienceCard } from '../components/ExperienceCard';

function Experience() {
  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-auto pr-8">
      <ExperienceCard 
        emoji="👧🏾" 
        subtitle="Software Engineer" 
        descriptionTitle="Borned" 
        description="I've borned in 1998 and from now on, my coding journey has started." 
        timeline="1998"
        image={Jern} />

        <ExperienceCard 
          emoji="🎓" 
          subtitle="Software Engineer" 
          descriptionTitle="High School" 
          description="I've graduated from high school and pursued my passion for coding." 
          timeline="2016"
          image={Jern} />

        <ExperienceCard 
          emoji="🎓" 
          subtitle="Software Engineer" 
          descriptionTitle="University" 
          description="I've completed my degree in Computer Science and gained extensive knowledge in software development." 
          timeline="2020"
          image={Jern} />

        <ExperienceCard 
          emoji="🎓" 
          subtitle="Software Engineer" 
          descriptionTitle="Internship" 
          description="I had the opportunity to intern at a tech company, where I applied my skills and learned about real-world software engineering practices." 
          timeline="2020"
          image={Jern} />

          <ExperienceCard 
          emoji="🎓" 
          subtitle="Software Engineer" 
          descriptionTitle="First Job" 
          timeline="2021"
          description="I secured my first job as a software engineer, where I contributed to building innovative applications and gained valuable industry experience." 
          image={Jern} />
    
    </div>
  );
}

export default Experience;