import * as yup from "yup";

const schema = yup.object().shape({
  semesterName: yup.string().required("Full Name is required"),
  startDate: yup.date().required("Start date is required"),
  endDate: yup.date().required("End date is required"),
});

export default schema;
