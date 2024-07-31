import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  fullName: yup.string().required("Full Name is required"),
  currentAddress: yup.string().required("Current Address is required"),
  birthdate: yup.date().required("Birthdate is required"),
  cellPhone: yup.string().required("Cell Phone is required"),
  emergencyContact: yup.string().required("Emergency Contact is required"),
  references: yup.string().required("References are required"),
  licenseNumber: yup.string().required("License Number is required"),
  licenseExpDate: yup.date().required("License Exp Date is required"),
  workWithChicago: yup.string().required("Reason is required"),
  relevantExperiences: yup
    .string()
    .required("Relevant Experiences are required"),
  weeklyCommitment: yup.string().required("Weekly Commitment is required"),
  healthcareProviderLicense: yup
    .mixed()
    .required("Healthcare Provider License is required"),
  longTermGoals: yup.string().required("Long Term Goals are required"),
  zelleContact: yup.string().required("Zelle Contact is required"),
});

export default schema;
