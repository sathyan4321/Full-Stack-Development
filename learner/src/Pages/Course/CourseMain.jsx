import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Course from './CourseList/Course';
import CourseDetails from './CourseDetailes/CourseDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Course />,
  },
  {
    path: '/course-details/:id',
    element: <CourseDetails />,
  },
]);

function CourseMain() {
  return <RouterProvider router={router} />;
}

export default CourseMain;