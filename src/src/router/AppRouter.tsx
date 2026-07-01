import { Route, Routes } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Me from "../pages/Me";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import RestaurantRatings from "../pages/project/RestaurantRatings";
import ProjectLayout from "../layouts/ProjectLayout";
import AppLayout from "../layouts/AppLayout";
import ChatApplication from "../pages/project/ChatApplication";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
      <Route path="/" element={<HomeLayout />}>
              <Route index element={<Me />} />
              <Route path="experience" element={<Experience />} />
              <Route path="projects" element={<Projects />} />
            </Route>

            <Route path="project" element={<ProjectLayout />}>
              <Route
                path="restaurant-ratings"
                element={<RestaurantRatings />}
              />
              <Route
                path="chatApplication"
                element={<ChatApplication />}
              />
          </Route>
      </Route>

      

    </Routes>
  );
}