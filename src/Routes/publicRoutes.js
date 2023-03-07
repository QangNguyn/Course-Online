import { Route } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import CourseDetail from "../Pages/Courses/CourseDetail/CourseDetail";
import ListsCourses from "../Pages/Courses/ListCourses/ListsCourses";
import Home from "../Pages/Home/Home";
export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/khoa-hoc" element={<ListsCourses />} />
    <Route path="/khoa-hoc/:id" element={<CourseDetail />} />
  </>
);
