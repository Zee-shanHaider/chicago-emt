import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdStar, IoIosStarOutline } from "react-icons/io";
import { Table } from "reactstrap";
import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
const emails = [
  {
    id: 1,
    from: "John Doe",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Duis at velit eu est varius tempor...",
    date: "5 Jul",
    isStarred: false,
    isRead: false,
  },
  {
    id: 2,
    from: "Jane Smith",
    message:
      "Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur luctus nunc, id tempus tortor. Nam consequat quam sed risus fringilla, non tincidunt tellus viverra...",
    date: "7 Jul",
    isStarred: false,
    isRead: false,
  },
  {
    id: 3,
    from: "Alice Johnson",
    message:
      "Praesent sit amet fermentum elit. Etiam malesuada mauris ut urna elementum, non facilisis risus aliquet. Vivamus mollis orci a est bibendum, nec scelerisque sapien dictum...",
    date: "7 Jul",
    isStarred: false,
    isRead: false,
  },
  {
    id: 4,
    from: "Bob Brown",
    message:
      "Maecenas pharetra, erat sed vulputate aliquam, ex magna efficitur dolor, ut pulvinar mi arcu in lacus. Suspendisse euismod tortor nec purus venenatis, at vulputate elit cursus...",
    date: "25 Jul",
    isStarred: false,
    isRead: false,
  },
];

const EmailNotifications = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [emailsList, setEmailsList] = useState(emails);

  const handleCheckboxChange = (id) => {
    setSelectedEmails((prev) =>
      prev.includes(id)
        ? prev.filter((emailId) => emailId !== id)
        : [...prev, id]
    );
  };

  const handleStarClick = (id) => {
    setEmailsList((prev) =>
      prev.map((email) =>
        email.id === id ? { ...email, isStarred: !email.isStarred } : email
      )
    );
  };

  const markAsReadUnread = (readStatus) => {
    setEmailsList((prev) =>
      prev.map((email) =>
        selectedEmails.includes(email.id)
          ? { ...email, isRead: readStatus }
          : email
      )
    );
    setSelectedEmails([]);
  };

  return (
    <div className="container mt-5">
      {selectedEmails.length > 0 && (
        <div className="mb-3 d-flex gap-2">
          <button
            className="btn btn-secondary"
            onClick={() => markAsReadUnread(true)}
          >
            {/* <IoMailOpenOutline size={25} /> */}
            Mark as Read
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => markAsReadUnread(false)}
          >
            Mark as Unread
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => markAsReadUnread(false)}
          >
            Delete
          </button>
        </div>
      )}
      <Table responsiveTag={true} className="table table-hover">
        <tbody>
          {emailsList.map((email) => (
            <tr key={email.id} className={email.isRead ? "table-light" : ""}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedEmails.includes(email.id)}
                  onChange={() => handleCheckboxChange(email.id)}
                />
              </td>
              <td>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleStarClick(email.id)}
                >
                  {email.isStarred ? (
                    <IoMdStar size={17} />
                  ) : (
                    <IoIosStarOutline size={17} />
                  )}
                </span>
              </td>
              <td className={email.isRead ? "" : "text-dark fw-bold"}>
                {email.from}
              </td>
              <td className={email.isRead ? "" : "text-dark fw-bold"}>
                {email.message.substring(0, 100)}...
              </td>
              <td className={email.isRead ? "" : "text-dark fw-bold"}>
                {email.date}
              </td>
              <td className={`${email.isRead ? "" : "text-dark fw-bold"}`}>
                <div className="d-flex gap-3">
                  <FaRegEye size={20} />
                  <CiEdit size={20} />
                  <MdDeleteOutline size={20} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmailNotifications;
