// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import tutorSchema from "../../utility/schemas/createTutorSchema";

// import {
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button,
//   FormFeedback,
// } from "reactstrap";

// const MyForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(tutorSchema),
//   });

//   const onSubmitHandler = (data) => {
//     console.log(data);
//   };

//   const formFields = [
//     {
//       name: "email",
//       label: "Email",
//       type: "email",
//       placeholder: "Enter your email",
//     },
//     {
//       name: "fullName",
//       label: "Full Name",
//       type: "text",
//       placeholder: "Enter your full name",
//     },
//     {
//       name: "currentAddress",
//       label: "Current Address",
//       type: "text",
//       placeholder: "Enter your current address",
//     },
//     { name: "birthdate", label: "Birthdate", type: "date" },
//     {
//       name: "cellPhone",
//       label: "Cell Phone #",
//       type: "text",
//       placeholder: "Enter your cell phone number",
//     },
//     {
//       name: "emergencyContact",
//       label: "Emergency Contact and best way to contact them",
//       type: "text",
//       placeholder: "Enter emergency contact details",
//     },
//     {
//       name: "references",
//       label: "2 References and best way to contact them",
//       type: "text",
//       placeholder: "Enter references",
//     },
//     {
//       name: "licenseNumber",
//       label: "Illinois EMT/Medic License Number",
//       type: "text",
//       placeholder: "Enter license number",
//     },
//     { name: "licenseExpDate", label: "License Exp Date", type: "date" },
//     {
//       name: "workWithChicago",
//       label: "Why do you want to work with Chicago EMT Training?",
//       type: "text",
//       placeholder: "Enter your reason",
//     },
//     {
//       name: "relevantExperiences",
//       label: "Relevant Experiences to aid you in teaching our EMT program",
//       type: "text",
//       placeholder: "Enter relevant experiences",
//     },
//     {
//       name: "weeklyCommitment",
//       label: "How many hours per week can you commit to CET?",
//       type: "select",
//       options: ["", "0-3 hours", "3-6 hours", "6-9 hours", "9-12 hours"],
//     },
//     {
//       name: "healthcareProviderLicense",
//       label: "Upload your current healthcare provider license",
//       type: "file",
//     },
//     {
//       name: "longTermGoals",
//       label:
//         "How can Chicago EMT Training assist you with your long term goals?",
//       type: "text",
//       placeholder: "Enter your long term goals",
//     },
//     {
//       name: "zelleContact",
//       label: "Email/Phone number connected to Zelle",
//       type: "text",
//       placeholder: "Enter email/phone number for Zelle",
//     },
//   ];

//   return (
//     <Form className="p-1" onSubmit={handleSubmit(onSubmitHandler)}>
//       {formFields.map((field, index) => (
//         <div className="my-1" key={index}>
//           <Label for={field.name}>{field.label}</Label>
//           {field.type === "select" ? (
//             <Input
//               name={field.name}
//               type="select"
//               {...register(field.name)}
//               id={field.name}
//               className={errors[field.name] ? "is-invalid" : ""}
//             >
//               {field.options.map((option, idx) => (
//                 <option key={idx} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </Input>
//           ) : (
//             <Input
//               type={field.type}
//               name={field.name}
//               {...register(field.name)}
//               id={field.name}
//               className={errors[field.name] ? "is-invalid" : ""}
//               placeholder={field.placeholder}
//             />
//           )}
//           <FormFeedback>{errors[field.name]?.message}</FormFeedback>
//         </div>
//       ))}
//       <Button type="submit" color="primary" className="w-100">
//         Submit
//       </Button>
//     </Form>
//   );
// };

// export default MyForm;

import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { FormInput, SelectDropdown } from "./components";
import { useFormik } from "formik";
import schema from "../../utility/schemas/createTutorSchema";

const CreateTutor = () => {
  const [page, setPage] = useState(0);
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");

  const initialValues = {
    email: "",
    fullName: "",
    currentAddress: "",
    birthdate: "",
    cellPhone: "",
    emergencyContact: "",
    references: "",
    licenseNumber: "",
    licenseExpDate: "",
    workWithChicago: "",
    relevantExperiences: "",
    weeklyCommitment: "",
    healthcareProviderLicense: null,
    longTermGoals: "",
    zelleContact: "",
  };

  const formFields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      name: "currentAddress",
      label: "Current Address",
      type: "text",
      placeholder: "Enter your current address",
    },
    { name: "birthdate", label: "Birthdate", type: "date" },
    {
      name: "cellPhone",
      label: "Cell Phone #",
      type: "text",
      placeholder: "Enter your cell phone number",
    },
    {
      name: "emergencyContact",
      label: "Emergency Contact and best way to contact them",
      type: "text",
      placeholder: "Enter emergency contact details",
    },
    {
      name: "references",
      label: "2 References and best way to contact them",
      type: "text",
      placeholder: "Enter references",
    },
    {
      name: "licenseNumber",
      label: "Illinois EMT/Medic License Number",
      type: "text",
      placeholder: "Enter license number",
    },
    { name: "licenseExpDate", label: "License Exp Date", type: "date" },
    {
      name: "relevantExperiences",
      label: "Relevant Experiences to aid you in teaching our EMT program",
      type: "text",
      placeholder: "Enter relevant experiences",
    },
    {
      name: "workWithChicago",
      label: "Why do you want to work with Chicago EMT Training?",
      type: "textarea",
      placeholder: "Enter your reason",
    },
    {
      name: "weeklyCommitment",
      label: "How many hours per week can you commit to CET?",
      type: "select",
      options: [
        { value: "", label: "" },
        { value: "0-3 hours", label: "0-3 hours" },
        { value: "3-6 hours", label: "3-6 hours" },
        { value: "6-9 hours", label: "6-9 hours" },
        { value: "9-12 hours", label: "9-12 hours" },
      ],
    },
    {
      name: "healthcareProviderLicense",
      label: "Upload your current healthcare provider license",
      type: "file",
    },
    {
      name: "longTermGoals",
      label:
        "How can Chicago EMT Training assist you with your long term goals?",
      type: "textarea",
      placeholder: "Enter your long term goals",
    },
    {
      name: "zelleContact",
      label: "Email/Phone number connected to Zelle",
      type: "text",
      placeholder: "Enter email/phone number for Zelle",
    },
  ];

  const handlePage = () => {
    if (page <= data.totalPages) {
      setPage(page + 1);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      values.phoneNo = values.phoneNo + "";
      //   if (mode === "edit") {
      //     if (values.password === "") {
      //       delete values.password;
      //     }
      //     updateUser(values);
      //   } else {
      //     mutate(values);
      //   }
    },
  });

  return (
    <>
      <Row className="mb-2 mx-0">
        {/* <Col lg={12} md={12} sm={12} className="p-2">
          <h4>{mode === "edit" ? "Edit User" : "Create User"}</h4>
        </Col> */}
        {formFields.map((field, index) => (
          <Col
            key={index}
            lg={
              field.type === "file" ||
              field.type === "select" ||
              field.type === "textarea"
                ? 12
                : 6
            }
            md={
              field.type === "file" ||
              field.type === "select" ||
              field.type === "textarea"
                ? 12
                : 6
            }
            sm={12}
            className="px-2"
          >
            {field.type === "select" ? (
              <Col lg={12} md={12} sm={12}>
                <SelectDropdown
                  handlePage={handlePage}
                  options={field.options}
                  isClearable={false}
                  showAboveLabel={true}
                  required={true}
                  label={field.label}
                  value={field?.options?.find(
                    (org) => org.value == formik.values[field.name]
                  )}
                  onChange={({ value }) =>
                    formik.setFieldValue(field.name, value)
                  }
                  onBlur={() => formik.setFieldTouched(field.name, true)}
                  error={
                    formik.touched[field.name] && formik.errors[field.name]
                  }
                />
              </Col>
            ) : (
              <FormInput
                type={field.type}
                label={field.label}
                placeholder={field.placeholder}
                {...formik.getFieldProps(field.name)}
                error={formik.touched[field.name] && formik.errors[field.name]}
              />
            )}
          </Col>
        ))}
        <Col lg={12} className="pb-2 ps-2">
          <Button
            type="submit"
            className={`border-0 d-flex justify-content-end text-white bg-orange btn-style `}
            color="primary"
            onClick={formik.handleSubmit}
          >
            Save
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CreateTutor;
