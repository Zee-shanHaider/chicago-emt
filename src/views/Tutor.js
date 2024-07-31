import MyPagination from "../components/ui/Pagination";
import Button from "../components/ui/Button";
import MyTable from "../components/ui/Table";
import { useState } from "react";
import TutorForm from "../components/forms/tutorForm";
import Modal from "../components/ui/Modal";
const TutorPage = () => {
  const [modal, setModal] = useState(false);

  const headers = ["First Name", "Last Name", "Username"];

  const data = [
    { firstname: "Mark", lastname: "Otto", username: "@mdo" },
    { firstname: "Jacob", lastname: "Thornton", username: "@fat" },
    { firstname: "Jacob", lastname: "Thornton", username: "@fat" },
    { firstname: "Jacob", lastname: "Thornton", username: "@fat" },
    { firstname: "Jacob", lastname: "Thornton", username: "@fat" },
    { firstname: "Jacob", lastname: "Thornton", username: "@fat" },
    { firstname: "Jacob", lastname: "Thornton", username: "@fat" },
    { firstname: "Jacob", lastname: "Thornton", username: "@fat" },
    { firstname: "Jacob", lastname: "Thornton", username: "@fat" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    { firstname: "Larry", lastname: "the Bird", username: "@twitter" },
    // Add more tutor data as needed
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
          buttonText={"Add Tutor"}
          setModal={setModal}
          toggle={toggle}
          modal={modal}
        >
          <TutorForm />
        </Modal>
      </div>
      <h1>Tutor List</h1>
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

export default TutorPage;
