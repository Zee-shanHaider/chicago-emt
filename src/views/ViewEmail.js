import { FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArchiveOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { Tooltip } from "reactstrap";
import { useNavigate } from "react-router-dom";
export default function Page() {
  const { id } = useParams();
  const emails = [
    {
      id: 1,
      to: "All Instructors",
      subject: "This is subject",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Duis at velit eu est varius tempor...",
      date: "5 Jul",
      isStarred: false,
      isRead: false,
    },
    {
      id: 2,
      to: "All Students",
      subject: "This is subject",
      message:
        "Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur luctus nunc, id tempus tortor. Nam consequat quam sed risus fringilla, non tincidunt tellus viverra...",
      date: "7 Jul",
      isStarred: false,
      isRead: false,
    },
    {
      id: 3,
      to: "All Instructors",
      subject: "This is subject",
      message:
        "Praesent sit amet fermentum elit. Etiam malesuada mauris ut urna elementum, non facilisis risus aliquet. Vivamus mollis orci a est bibendum, nec scelerisque sapien dictum...",
      date: "7 Jul",
      isStarred: false,
      isRead: false,
    },
    {
      id: 4,
      to: "Both",
      subject: "This is subject",
      message:
        "Maecenas pharetra, erat sed vulputate aliquam, ex magna efficitur dolor, ut pulvinar mi arcu in lacus. Suspendisse euismod tortor nec purus venenatis, at vulputate elit cursus...",
      date: "25 Jul",
      isStarred: false,
      isRead: false,
    },
  ];
  const [email, setEmail] = useState(null);
  const fetchEmailData = () => {
    const email = emails.find((email) => email.id == id);
    setEmail(email);
  };
  const navigate = useNavigate();
  const handleBackLocation = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (id) fetchEmailData();
  }, [id]);

  return (
    <div className="card p-2">
      <div className="d-flex gap-4">
        <IconWithTooltip
          id="backTooltip"
          IconComponent={IoArrowBackOutline}
          handleClick={handleBackLocation}
          size={20}
          tooltip="Back"
        />
        <div className="d-flex gap-2">
          <IconWithTooltip
            id="archiveTooltip"
            IconComponent={IoArchiveOutline}
            size={20}
            tooltip="Archive"
          />
          <IconWithTooltip
            id="deleteTooltip"
            IconComponent={MdDeleteOutline}
            size={20}
            tooltip="Delete"
          />
          <div>
            <RxDividerVertical size={20} />
          </div>
          <IconWithTooltip
            id="unreadTooltip"
            IconComponent={IoMailUnreadOutline}
            size={20}
            tooltip="Mark as Unread"
          />
        </div>
      </div>
      <h2 className="mt-3">{email?.subject}</h2>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center">
        <div className="d-flex gap-1 align-items-center mb-2 mb-sm-0">
          <div
            className="d-inline-flex justify-content-center align-items-center rounded-circle border"
            style={{
              width: "35px",
              height: "35px",
              backgroundColor: "#cce6ff",
            }}
          >
            <FaUser size={20} className="text-primary"></FaUser>
          </div>
          <span>{email?.to}</span>
        </div>
        <div className="text-sm-end mb-2">
          <p>{email?.date}</p>
        </div>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-1">{email?.message}</p>
      </div>
    </div>
  );
}

const IconWithTooltip = ({ id, handleClick, IconComponent, size, tooltip }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <div
        id={id}
        onClick={() => handleClick()}
        className="cursor-pointer pb-1"
      >
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
