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
export default function Notification() {
  return (
    <div>
      <Tabs>
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
          <AllNotifications />
        </TabPanel>
        <TabPanel>
          <NewEmailMessage />
        </TabPanel>
        <TabPanel>
          <NewNotification />
        </TabPanel>
      </Tabs>
    </div>
  );
}
