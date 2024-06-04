import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.scss';

// Sample course data
const courses = [
  {
    id: 1,
    img: '/path/to/course-image.jpg',
    title: 'Introduction to Web Development',
    aboutCourse: 'This course will teach you the fundamentals of web development, including HTML, CSS, and JavaScript.',
    syllabus: {
      modules: 5,
      totalHours: 20,
      totalVideos: 50,
      moduleList: [
        {
          title: 'HTML Basics',
          contents: [
            'Introduction to HTML',
            'HTML Elements',
            'HTML Structure',
            'HTML Forms',
          ],
        },
        {
          title: 'CSS Fundamentals',
          contents: [
            'CSS Selectors',
            'CSS Box Model',
            'CSS Layout',
            'CSS Animations',
          ],
        },
        // Add more modules as needed
      ],
    },
    whatYouWillLearn: [
      'Build responsive websites',
      'Write clean and maintainable code',
      'Understand web development best practices',
    ],
    objective: 'By the end of this course, you will be able to create modern, responsive websites using HTML, CSS, and JavaScript.',
    certificateDetails: 'Upon successful completion of this course, you will receive a certificate of completion.',
    studentsFeedback: [
      'Great course for beginners!',
      'The instructor explains concepts clearly.',
      'Highly recommended for anyone interested in web development.',
    ],
    price: '$99',
  },
  // Add more courses as needed
];

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-details-container">
      <div className="details-course">
        <img src={course.img} alt={course.title} />
        <h2>{course.title}</h2>
        <p>{course.aboutCourse}</p>
        <div className="syllabus">
          <h3>Syllabus</h3>
          <p>Number of Modules: {course.syllabus.modules}</p>
          <p>Total Hours: {course.syllabus.totalHours}</p>
          <p>Total Videos: {course.syllabus.totalVideos}</p>
          <h4>Module List:</h4>
          <ul>
            {course.syllabus.moduleList.map((module, index) => (
              <li key={index}>
                <h5>{module.title}</h5>
                <ul>
                  {module.contents.map((content, contentIndex) => (
                    <li key={contentIndex}>{content}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="what-you-will-learn">
          <h3>What You Will Learn</h3>
          <ul>
            {course.whatYouWillLearn.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <p>{course.objective}</p>
        <p>{course.certificateDetails}</p>
        <div className="students-feedback">
          <h3>Students Feedback</h3>
          <ul>
            {course.studentsFeedback.map((feedback, index) => (
              <li key={index}>{feedback}</li>
            ))}
          </ul>
        </div>
        <p>Price: {course.price}</p>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default CourseDetails;