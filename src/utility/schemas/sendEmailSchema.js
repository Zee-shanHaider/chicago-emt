import * as yup from "yup";

const schema = yup.object().shape({
  to: yup.string().required("To is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

export default schema;
