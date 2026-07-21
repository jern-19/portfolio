import { Route, Routes } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Me from '../pages/Me';
import Experience from '../pages/Experience';
import Projects from '../pages/LearningLog';
import RestaurantRatings from '../pages/project/RestaurantRatings';
import ProjectLayout from '../layouts/ProjectLayout';
import AppLayout from '../layouts/AppLayout';
import ChatApplication from '../pages/project/ChatApplication';
import ClassificationOfRecycling from '../pages/project/ClassificationOfRecycling';
import Calculator from '../pages/project/Calculator';
import Contact from '../pages/Contact';
import Report from '../pages/restaurantRatings/Report';
import ProjectsNew from '../pages/ProjecetsNew';
import LearningLog from '../pages/LearningLog';
import Login from '../pages/Login';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Me />} />
          <Route path="experience" element={<Experience />} />
          <Route path="learningLog" element={<LearningLog />} />
          <Route path="articles" element={<Projects />} />
        </Route>

        <Route path="project" element={<ProjectLayout />}>
          <Route path="restaurantRatings" element={<RestaurantRatings />} > </Route>
          <Route path="chatApplication" element={<ChatApplication />} />
          <Route
            path="classificationOfRecycling"
            element={<ClassificationOfRecycling />}
          />
          <Route path="calculator" element={<Calculator />} />
          <Route path="restaurantRatings/report" element={<Report />} />
          
        </Route>

          <Route path="projects" element={<ProjectsNew />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
