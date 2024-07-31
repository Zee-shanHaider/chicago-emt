import { Mail, Home, Users, BookOpen, Book } from "react-feather";

export default [
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "coursePage",
    title: "Courses",
    icon: <Book size={20} />,
    navLink: "/courses",
  },
  {
    id: "semesterPage",
    title: "Semesters",
    icon: <BookOpen size={20} />,
    navLink: "/semesters",
  },
  {
    id: "studentPage",
    title: "Students",
    icon: <Users size={20} />,
    navLink: "/students",
  },
  {
    id: "tutorPage",
    title: "Tutors",
    icon: <Users size={20} />,
    navLink: "/tutors",
  },
];
