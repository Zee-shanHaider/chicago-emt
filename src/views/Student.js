import MyPagination from "../components/ui/Pagination";
import Button from "../components/ui/Button";
import MyTable from "../components/ui/Table";
import { useState } from "react";
import Modal from "../components/ui/Modal";
import StudentForm from "../components/forms/studentForm";

const StudentPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState(false);

  const headers = ["First Name", "Last Name", "Username", "Payment Status"];

  const data = [
    {
      firstname: "Mark",
      lastname: "Otto",
      username: "@mdo",
      paymentstatus: "Paid",
    },
    {
      firstname: "Jacob",
      lastname: "Thornton",
      username: "@fat",
      paymentstatus: "Not Paid",
    },
    {
      firstname: "Larry",
      lastname: "the Bird",
      username: "@twitter",
      paymentstatus: "Paid",
    },
    {
      firstname: "John",
      lastname: "Doe",
      username: "@johnd",
      paymentstatus: "Paid",
    },
    {
      firstname: "Jane",
      lastname: "Smith",
      username: "@janes",
      paymentstatus: "Not Paid",
    },
    {
      firstname: "Alice",
      lastname: "Johnson",
      username: "@alicej",
      paymentstatus: "Paid",
    },
    {
      firstname: "Bob",
      lastname: "Brown",
      username: "@bobb",
      paymentstatus: "Not Paid",
    },
    {
      firstname: "Charlie",
      lastname: "Davis",
      username: "@charlied",
      paymentstatus: "Paid",
    },
    {
      firstname: "David",
      lastname: "Wilson",
      username: "@davidw",
      paymentstatus: "Not Paid",
    },
    {
      firstname: "Eve",
      lastname: "Miller",
      username: "@evem",
      paymentstatus: "Paid",
    },
    {
      firstname: "Frank",
      lastname: "Taylor",
      username: "@frankt",
      paymentstatus: "Paid",
    },
    {
      firstname: "Grace",
      lastname: "Anderson",
      username: "@gracea",
      paymentstatus: "Not Paid",
    },
    {
      firstname: "Hank",
      lastname: "Thomas",
      username: "@hankt",
      paymentstatus: "Paid",
    },
    {
      firstname: "Ivy",
      lastname: "Martinez",
      username: "@ivym",
      paymentstatus: "Paid",
    },
    {
      firstname: "Jack",
      lastname: "White",
      username: "@jackw",
      paymentstatus: "Not Paid",
    },
    {
      firstname: "Karen",
      lastname: "Harris",
      username: "@karenh",
      paymentstatus: "Paid",
    },
    {
      firstname: "Leo",
      lastname: "Clark",
      username: "@leoc",
      paymentstatus: "Not Paid",
    },
    {
      firstname: "Mia",
      lastname: "Lewis",
      username: "@mial",
      paymentstatus: "Paid",
    },
    {
      firstname: "Noah",
      lastname: "Walker",
      username: "@noahw",
      paymentstatus: "Paid",
    },
    {
      firstname: "Olivia",
      lastname: "Young",
      username: "@oliviay",
      paymentstatus: "Not Paid",
    },
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

export default StudentPage;
