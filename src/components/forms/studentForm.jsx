import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import studentSchema from "../../utility/schemas/createStudentSchema";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const StudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(studentSchema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <Form className="m-1" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="my-1">
        <Label for="firstname">First Name</Label>
        <Input
          {...register("firstname")}
          id="firstname"
          className={`form-control ${errors.firstname ? "is-invalid" : ""}`}
          placeholder="Enter first name"
        />
        {errors.firstname && (
          <div className="invalid-feedback">{errors.firstname.message}</div>
        )}
      </div>
      <div className="my-1">
        <Label for="lastname">Last Name</Label>
        <Input
          {...register("lastname")}
          id="lastname"
          className={`form-control ${errors.lastname ? "is-invalid" : ""}`}
          placeholder="Enter last name"
        />
        {errors.lastname && (
          <div className="invalid-feedback">{errors.lastname.message}</div>
        )}
      </div>
      <div className="my-1">
        <Label for="username">Username</Label>
        <Input
          {...register("username")}
          id="username"
          className={`form-control ${errors.username ? "is-invalid" : ""}`}
          placeholder="Enter username"
        />
        {errors.username && (
          <div className="invalid-feedback">{errors.username.message}</div>
        )}
      </div>
      <div className="my-1">
        <Label for="password">Password</Label>
        <Input
          {...register("password")}
          id="password"
          type="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          placeholder="Enter password"
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password.message}</div>
        )}
      </div>
      <Button
        type="submit"
        color="primary"
        className="w-10 d-flex justify-content-right"
      >
        Add Student
      </Button>
    </Form>
  );
};

export default StudentForm;
