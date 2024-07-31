import * as yup from "yup";

const schema = yup.object().shape({
  courseName: yup.string().required("Course Name is required"),
  courseCode: yup.string().required("Course Code is required"),
  instructor: yup.string().required("Instructor name is required"),
  credits: yup.number().required("Credits is required"),
});

export default schema;
