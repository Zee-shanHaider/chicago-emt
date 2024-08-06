import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { LuUsers } from "react-icons/lu";
export default function DashBoardCard({ Icon, Title, Count }) {
  return (
    <>
      <Card className="text-align-left">
        <CardHeader className="d-flex align-items-start py-1 justify-content-start flex-column my-0 gap-1">
          <div
            style={{
              backgroundColor: "#cce6ff",
              padding: "10px 6px",
              borderRadius: "5px",
            }}
          >
            <LuUsers className="text-primary" size={30} />
          </div>
          <CardTitle>{Title}</CardTitle>
          <CardTitle className="p-0 m-0">Total Active Students</CardTitle>
        </CardHeader>
        <CardBody className="font-weight-bold">36</CardBody>
      </Card>
    </>
  );
}
