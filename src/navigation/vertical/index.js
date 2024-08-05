import { Mail, Home, Users, BookOpen, Book, Bell } from "react-feather";

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
    id: "notificationPage",
    title: "Notifications",
    icon: <Bell size={20} />,
    navLink: "/notification",
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
