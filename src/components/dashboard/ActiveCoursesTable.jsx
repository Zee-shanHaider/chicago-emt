import React from "react";
import MyTable from "../ui/Table";

const headers = [
  "Course Code",
  "Course Name",
  "Assigned Instructor",
  "Completion Rate",
  "Actions",
];

const data = [
  {
    coursecode: "CS101",
    coursename: "Introduction to Computer Science",
    assignedinstructor: "Dr. John Doe",
    completionrate: "80%",
  },
  {
    coursecode: "MATH202",
    coursename: "Calculus II",
    assignedinstructor: "Prof. Jane Smith",
    completionrate: "90%",
  },
  // Add more course data here
];

const ActiveCourses = () => {
  return (
    <div>
      <h3>Currently Active Courses</h3>
      <MyTable headers={headers} data={data} />
    </div>
  );
};

export default ActiveCourses;
