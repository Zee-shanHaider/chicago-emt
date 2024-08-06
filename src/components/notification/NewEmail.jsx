import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { FormInput, SelectDropdown } from "../forms/components";
import { Send } from "react-feather";
import { useFormik } from "formik";
import schema from "../../utility/schemas/sendEmailSchema";
import FileUploader from "../ui/FileUploader";

const NewEmailMessage = ({ emailId, emails, setSelectedTabIndex }) => {
  console.log(emailId, "idddddddddddddd");
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  const [email, setEmail] = useState(null);

  const [files, setFiles] = useState([]);

  const initialValues = {
    to: email?.to || "",
    subject: email?.subject || "",
    message: email?.message || "",
  };

  const formFields = [
    {
      name: "to",
      label: "To:",
      placeholder: "",
      required: true,
      type: "select",
      options: [
        { value: "", label: "" },
        { value: "All Instructors", label: "All Instructors" },
        { value: "All Students", label: "All Students" },
        { value: "Both", label: "Both" },
      ],
    },
    {
      name: "subject",
      label: "Subject:",
      required: true,
      type: "text",
    },
    {
      name: "message",
      label: "Message:",
      required: true,
      type: "textarea",
    },
  ];

  const fetchEmailData = () => {
    const email = emails.find((email) => email.id === emailId);
    setEmail(email);
  };
  console.log(email, "emailsssssss");

  useEffect(() => {
    if (emailId) {
      fetchEmailData();
    }
  }, [emailId]);

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("to", values.to);
      formData.append("subject", values.subject);
      formData.append("message", values.message);
      files.forEach((file, index) => {
        formData.append(`file${index}`, file);
      });
      // Handle form data submission
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
    },
  });

  const handlePage = () => {
    if (page <= data.totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="card mt-2">
      <div className="card-body">
        <h2 className="card-title mb-1">New Message</h2>
        <Row className="mb-2 mx-0">
          {formFields.map((field, index) => (
            <Col
              key={index}
              lg={
                field.type === "file" ||
                field.type === "text" ||
                field.type === "select" ||
                field.type === "textarea"
                  ? 12
                  : 6
              }
              md={
                field.type === "file" ||
                field.type === "text" ||
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
                    required={field.required}
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
                  required={field.required}
                  placeholder={field.placeholder}
                  {...formik.getFieldProps(field.name)}
                  error={
                    formik.touched[field.name] && formik.errors[field.name]
                  }
                />
              )}
            </Col>
          ))}
          <Col lg={12} className="px-1">
            <FileUploader setFiles={setFiles} />
          </Col>
          <div className="text-end py-1">
            <button
              type="button"
              className="btn btn-primary"
              onClick={formik.handleSubmit}
            >
              <Send size={16} />
              Send
            </button>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default NewEmailMessage;
