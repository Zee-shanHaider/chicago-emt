import MyCalendar from "../components/ui/Calender";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Row,
  Col,
} from "reactstrap";
import DashBoardCard from "../components/ui/DashboardCard";
import { LuUsers } from "react-icons/lu";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import ActiveCourses from "../components/dashboard/ActiveCoursesTable";
const Home = () => {
  return (
    <>
      <Row>
        <Col sm="4">
          <Row>
            <Col sm="6">
              <DashBoardCard
                Icon={LuUsers}
                title={"Total Active Students"}
                count={240}
                total={250}
              />
            </Col>
            <Col sm="6">
              <DashBoardCard
                Icon={FaChalkboardTeacher}
                title={"Total Active Instructors"}
                count={240}
                total={250}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <DashBoardCard
                Icon={BsClockHistory}
                title={"Average Working Hours for Instructors"}
                count={"30.8 hrs"}
              />
            </Col>
            <Col sm="6">
              <DashBoardCard
                Icon={FaChartLine}
                title={"Average(%) Grades for Students"}
                count={"90%"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <DashBoardCard
                Icon={MdOutlinePayments}
                title={"Payment Status"}
                paid={287}
                pending={3}
              />
            </Col>
          </Row>
        </Col>
        <Col sm="8">
          <MyCalendar />
        </Col>
      </Row>
      <div className="p-4">
        <ActiveCourses />
      </div>
    </>
  );
};

export default Home;
