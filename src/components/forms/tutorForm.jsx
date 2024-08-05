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
      placeholder: "Select hours per week",
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
    },
  });

  return (
    <>
      <Row className="mb-2 mx-0">
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
                  placeholder={field.placeholder}
                  label={field.label}
                  value={field?.options?.find(
                    (opt) => opt.value == formik.values[field.name]
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
        <Col lg={12} className="pb-2 ps-2 d-flex justify-content-end">
          <Button
            type="submit"
            className={`border-0 text-white bg-orange btn-style`}
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
