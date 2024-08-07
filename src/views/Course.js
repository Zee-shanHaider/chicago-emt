import React, { useState } from "react";
import MyTable from "../components/ui/Table";
import MyPagination from "../components/ui/Pagination";
import Modal from "../components/ui/Modal";
import CourseForm from "../components/forms/courseForm";

const Courses = () => {
  const headers = ["Course Name", "Course Code", "Instructor", "Credits"];
  const [modal, setModal] = useState(false);
  const data = [
    {
      coursename: "Introduction to Computer Science",
      coursecode: "CS101",
      instructor: "Dr. Smith",
      credits: 3,
    },
    {
      coursename: "Data Structures and Algorithms",
      coursecode: "CS201",
      instructor: "Prof. Johnson",
      credits: 4,
    },
    {
      coursename: "Database Systems",
      coursecode: "CS301",
      instructor: "Dr. Brown",
      credits: 3,
    },
    {
      coursename: "Machine Learning",
      coursecode: "CS801",
      instructor: "Dr. Grey",
      credits: 4,
    },
    {
      coursename: "Machine Learning",
      coursecode: "CS801",
      instructor: "Dr. Grey",
      credits: 4,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const toggle = () => setModal(!modal);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-between align-items-center mb-2">
        <div class="form-group col-lg-3">
          <div class="form-group has-feedback">
            <input
              type="text"
              class="form-control"
              id="inputValidation"
              placeholder="Search"
            />
            <span class="glyphicon glyphicon-search form-control-feedback"></span>
          </div>
        </div>
        <Modal
          size={"lg"}
          buttonText={"Add Course"}
          setModal={setModal}
          toggle={toggle}
          modal={modal}
        >
          <CourseForm />
        </Modal>
      </div>
      <h1>Courses List</h1>
      <div className="d-flex w-full h-full flex-column justify-content-between">
        <MyTable headers={headers} data={currentData} />
        <MyPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Courses;
