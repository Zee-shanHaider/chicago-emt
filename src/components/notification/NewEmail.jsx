import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { FormInput, SelectDropdown } from "../forms/components";
import { Send } from "react-feather";
import { useFormik } from "formik";
import schema from "../../utility/schemas/sendEmailSchema";

const NewEmailMessage = () => {
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");

  const initialValues = {
    to: "",
    subject: "",
    message: "",
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
      //   placeholder: "Enter your email",
    },
    {
      name: "message",
      label: "Message:",
      required: true,
      type: "textarea",
      //   placeholder: "Enter your full name",
    },
  ];

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      values.phoneNo = values.phoneNo + "";
    },
  });

  const handlePage = () => {
    if (page <= data.totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-1">New Message</h2>
          {/* <form>
            <div className="mb-1">
              <label htmlFor="to" className="form-label">
                To:
              </label>
              <input
                type="email"
                className="form-control"
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="subject" className="form-label">
                Subject:
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="text-end py-1">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSend}
              >
                <Send size={16} />
                Send
              </button>
            </div>
          </form> */}
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
            {/* <Col lg={12} className="pb-2 ps-2 d-flex justify-content-end">
              <Button
                type="submit"
                className={`border-0 text-white bg-orange btn-style`}
                color="primary"
                onClick={formik.handleSubmit}
              >
                Save
              </Button>
            </Col> */}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default NewEmailMessage;
