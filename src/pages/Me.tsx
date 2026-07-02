
import Jern from '../assets/Jern.png';
import { ProfileCard } from '../components/ProfileCard';

function Me() {
  return (
    <div className="w-full h-full flex flex-col  gap-4 ">
      <ProfileCard
        title="Jern"
        subtitle="Full Stack Software Engineer"
        description={{
          title: "Hi!",
          text: "Welcome to my space 👋🏾 Sharing my experience, projects, and journey in software engineering."
        }}
        image={Jern}
      />
      <ProfileCard
        title="Jern"
        subtitle="Full Stack Software Engineer"
        description={{
          text: "I’m a Full Stack Software Engineer with 4+ years of experience. I build web applications from frontend to backend"
        }}
        image={Jern}
      />
       <ProfileCard
        title="Jern"
        subtitle="Full Stack Software Engineer"
        description={{
          text: "I’m a big fan of React development. I enjoy building clean, interactive user interfaces and improving user experience."
        }}
        image={Jern}
      />
      <ProfileCard
        title="Jern"
        subtitle="Full Stack Software Engineer"
        description={{
          text: "I’m a big fan of React development. I enjoy building clean, interactive user interfaces and improving user experience."
        }}
        image={Jern}
      />
      <ProfileCard
        title="Jern"
        subtitle="Full Stack Software Engineer"
        description={{
          title: "Fun Fact ☕",
          text: "I moved to Munich for an internship and ended up staying, where I’ve been working as a Full Stack Software Engineer for 4+ years."
        }}
        image={Jern}
      />
      
    </div>
  );
}

export default Me;