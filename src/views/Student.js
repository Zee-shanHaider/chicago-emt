import MyPagination from "../components/ui/Pagination";
import Button from "../components/ui/Button";
import MyTable from "../components/ui/Table";
import { useState } from "react";
import Modal from "../components/ui/Modal";
import StudentForm from "../components/forms/studentForm";

const StudentPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState(false);

  const headers = ["First Name", "Last Name", "Username"];

  const data = [
    { firstname: "Mark", lastname: "Otto", username: "@mdo" },
    { firstname: "Jacob", lastname: "Thornton", username: "@fat" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "John", lastname: "Doe", username: "@johnd" },
    { firstname: "Jane", lastname: "Smith", username: "@janes" },
    { firstname: "Alice", lastname: "Johnson", username: "@alicej" },
    { firstname: "Bob", lastname: "Brown", username: "@bobb" },
    { firstname: "Charlie", lastname: "Davis", username: "@charlied" },
    { firstname: "David", lastname: "Wilson", username: "@davidw" },
    { firstname: "Eve", lastname: "Miller", username: "@evem" },
    { firstname: "Frank", lastname: "Taylor", username: "@frankt" },
    { firstname: "Grace", lastname: "Anderson", username: "@gracea" },
    { firstname: "Hank", lastname: "Thomas", username: "@hankt" },
    { firstname: "Ivy", lastname: "Martinez", username: "@ivym" },
    { firstname: "Jack", lastname: "White", username: "@jackw" },
    { firstname: "Karen", lastname: "Harris", username: "@karenh" },
    { firstname: "Leo", lastname: "Clark", username: "@leoc" },
    { firstname: "Mia", lastname: "Lewis", username: "@mial" },
    { firstname: "Noah", lastname: "Walker", username: "@noahw" },
    { firstname: "Olivia", lastname: "Young", username: "@oliviay" },
  ];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggle = () => setModal(!modal);
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
          buttonText={"Add Student"}
          setModal={setModal}
          toggle={toggle}
          modal={modal}
        >
          <StudentForm />
        </Modal>
      </div>
      <h1>Students List</h1>
      <div className="d-flex w-full h-full flex-column justify-content-between align-items-end">
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

export default StudentPage;
