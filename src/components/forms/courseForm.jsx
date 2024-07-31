import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { FormInput, SelectDropdown } from "./components";
import { useFormik } from "formik";
import schema from "../../utility/schemas/createCourseSchema";

const CreateTutor = () => {
  const [page, setPage] = useState(0);
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");

  const initialValues = {
    courseName: "",
    courseCode: "",
    instructor: "",
    credits: "",
  };

  const formFields = [
    {
      name: "courseName",
      label: "Course Name",
      type: "text",
      placeholder: "Enter course name",
    },
    {
      name: "courseCode",
      label: "Course Code",
      type: "text",
      placeholder: "Enter course code",
    },
    {
      name: "instructor",
      label: "Instructor",
      type: "text",
      placeholder: "Enter your instructor name",
    },
    {
      name: "credits",
      label: "Credits",
      type: "number",
      placeholder: "Enter your credits",
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
