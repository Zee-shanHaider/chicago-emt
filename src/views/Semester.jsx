import MyPagination from "../components/ui/Pagination";
import MyTable from "../components/ui/Table";
import { useState } from "react";
import Modal from "../components/ui/Modal";
import SemesterForm from "../components/forms/semesterForm";

const SemesterPage = () => {
  const headers = ["Semester Name", "Start Date", "End Date"];
  const [modal, setModal] = useState(false);
  const data = [
    {
      semestername: "Fall 2023",
      startdate: "2023-09-01",
      enddate: "2023-12-15",
    },
    {
      semestername: "Spring 2024",
      startdate: "2024-01-10",
      enddate: "2024-05-20",
    },
    {
      semestername: "Summer 2024",
      startdate: "2024-06-05",
      enddate: "2024-08-15",
    },
    // Add more semester data as needed
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
          buttonText={"Add Semester"}
          setModal={setModal}
          toggle={toggle}
          modal={modal}
        >
          <SemesterForm />
        </Modal>
        {/* <Button text={"Add Student"} /> */}
      </div>
      <h1>Semesters List</h1>
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

export default SemesterPage;
