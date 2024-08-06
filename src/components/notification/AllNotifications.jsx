import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdStar, IoIosStarOutline } from "react-icons/io";
import { Table } from "reactstrap";
import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "reactstrap";

const EmailNotifications = ({ setEmailId, emails, setSelectedTabIndex }) => {
  const navigate = useNavigate();
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
    <div className="mt-2">
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
      <Table hover={true} responsive className="table table-hover">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" disabled />
            </th>
            <th scope="col">Stare</th>
            <th scope="col">To</th>
            <th scope="col text-align-center">Message</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
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
              <td
                className={`text-nowrap ${
                  email.isRead ? "" : "text-dark fw-bold"
                }`}
              >
                {email.to}
              </td>
              <td
                className={`text-nowrap text-truncate ${
                  email.isRead ? "" : "text-dark fw-bold "
                } `}
                style={{ maxWidth: "450px" }}
              >
                {email.message}
              </td>
              <td className={email.isRead ? "" : "text-dark fw-bold"}>
                {email.date}
              </td>
              <td className={`${email.isRead ? "" : "text-dark fw-bold"}`}>
                <div className="d-flex gap-2">
                  <IconWithTooltip
                    id="viewTooltip"
                    handleClick={() => navigate(`${email.id}`)}
                    IconComponent={FaRegEye}
                    size={20}
                    tooltip="View"
                  />
                  <IconWithTooltip
                    id="editTooltip"
                    handleClick={() => {
                      setEmailId(email.id);
                      setSelectedTabIndex(1);
                    }}
                    IconComponent={CiEdit}
                    size={20}
                    tooltip="Edit"
                  />
                  {/* <FaRegEye size={20} onClick={() => navigate(`${email.id}`)} /> */}

                  {/* <CiEdit size={20} onClick={() => {}} /> */}
                  <IconWithTooltip
                    id="deleteTooltip"
                    IconComponent={MdDeleteOutline}
                    size={20}
                    tooltip="Delete"
                  />
                  {/* <MdDeleteOutline size={20} /> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const IconWithTooltip = ({ id, handleClick, IconComponent, size, tooltip }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <div id={id} onClick={() => handleClick()} className="cursor-pointer">
        <IconComponent size={size} />
      </div>
      <Tooltip
        placement="bottom"
        isOpen={tooltipOpen}
        target={id}
        toggle={toggle}
      >
        {tooltip}
      </Tooltip>
    </div>
  );
};

export default EmailNotifications;
