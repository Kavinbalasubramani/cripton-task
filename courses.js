import React from "react";

const courses = [
  {
    id: 1,
    name: "Basic Algorithm",
    lessons: 25,
    startDate: "27 Jan, 2023",
    completed: 10,
    totalLessons: 25,
    duration: "14h 38m 56s",
    icon: "🟪",
    color: "#D4C2FC",
  },
  {
    id: 2,
    name: "Web Development",
    lessons: 45,
    startDate: "23 Feb, 2023",
    completed: 40,
    totalLessons: 45,
    duration: "36h 30m 00s",
    icon: "🔹",
    color: "#B2E4FC",
  },
  {
    id: 3,
    name: "Basic Data Science",
    lessons: 37,
    startDate: "14 Jan, 2023",
    completed: 9,
    totalLessons: 37,
    duration: "37h 00m 00s",
    icon: "🟧",
    color: "#FCD4B2",
  },
  {
    id: 4,
    name: "UI/UX Design",
    lessons: 32,
    startDate: "19 Feb, 2023",
    completed: 26,
    totalLessons: 32,
    duration: "16h 40m 50s",
    icon: "🟩",
    color: "#C2FCD4",
  },
  {
    id: 5,
    name: "Project Management",
    lessons: 19,
    startDate: "27 Jan, 2023",
    completed: 14,
    totalLessons: 19,
    duration: "13h 20m 00s",
    icon: "🟥",
    color: "#FCD4C2",
  },
];

export default function Courses() {
  return (
    <div className="courses-container">
      <div className="courses-header">
        <h2>My Courses</h2>
        <span className="view-all">View All</span>
      </div>

      <div className="courses-table">
        <div className="table-header">
          <span>Course Name</span>
          <span>Start Date</span>
          <span>Lesson Completed</span>
          <span>Duration</span>
        </div>
        {courses.map((course) => (
          <div className="table-row" key={course.id}>
            <div className="course-info">
              <span className="course-icon" style={{ backgroundColor: course.color }}>
                {course.icon}
              </span>
              <div>
                <h3>{course.name}</h3>
                <p>{course.lessons} Lessons</p>
              </div>
            </div>

            <span>{course.startDate}</span>
            <span>
              {course.completed}<span className="gray">/{course.totalLessons}</span> ({Math.round((course.completed / course.totalLessons) * 100)}%)
            </span>
            <span>{course.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
