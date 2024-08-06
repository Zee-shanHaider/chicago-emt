import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  NewEmailMessage,
  NewNotification,
  AllNotifications,
} from "../components/notification";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { BsEnvelopePlus } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import { subject } from "@casl/ability";
export default function Notification() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const [emailId, setEmailId] = useState(null);
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
  return (
    <div>
      <Tabs
        selectedIndex={selectedTabIndex}
        onSelect={(index) => {
          setSelectedTabIndex(index);
          setEmailId(null);
        }}
      >
        <TabList>
          <Tab>
            <IoMdNotificationsOutline size={20} />
            <span className="p-1">Notifications</span>
          </Tab>
          <Tab>
            <BsEnvelopePlus size={20} />
            <span className="p-1">Send Email</span>
          </Tab>
          <Tab>
            <MdOutlineNotificationAdd size={20} />
            <span className="p-1">Send Notification</span>
          </Tab>
        </TabList>
        <TabPanel>
          <AllNotifications
            setSelectedTabIndex={setSelectedTabIndex}
            emails={emails}
            setEmailId={setEmailId}
          />
        </TabPanel>
        <TabPanel>
          <NewEmailMessage
            emails={emails}
            emailId={emailId}
            setSelectedTabIndex={setSelectedTabIndex}
          />
        </TabPanel>
        <TabPanel>
          <NewNotification />
        </TabPanel>
      </Tabs>
    </div>
  );
}
