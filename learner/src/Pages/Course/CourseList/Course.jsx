import React from 'react';
import './Course.scss';
import { Link } from 'react-router-dom';

// Sample data
const courses = [
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the fundamentals of React and build modern web applications.',
    instructor: 'John Doe',
  },
  {
    id: 2,
    title: 'Advanced React Patterns',
    description: 'Dive into advanced React patterns and techniques for building scalable applications.',
    instructor: 'Jane Smith',
  },
  {
    id: 3,
    title: 'Introduction to Angular',
    description: 'Learn the fundamentals of Angular and build modern web applications.',
    instructor: 'Bob Johnson',},
  {
    id: 4,
    title: 'Advanced Angular Patterns',
    description: 'Dive into advanced Angular patterns and techniques for building scalable applications.',
    instructor: 'Alice Lee',
  },
  // Add more courses as needed
];

function Course() {
  return (
    <div className='course'>
      <h2>Courses</h2>
      <div className='course-list'>
        {courses.map((course) => (
          <Link
            key={course.id}
            to={`/course-details/${course.id}`}
            className="course-container"
          >
            <div className='course-content'>
              <img src="https://via.placeholder.com/150" alt={course.title} />
              <div className="text-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>Instructor: {course.instructor}</p>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Course;