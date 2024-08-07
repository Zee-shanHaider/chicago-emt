import { CardTitle, Card, CardBody, CardHeader } from "reactstrap";

import React from "react";

export default function DashBoardCard({
  Icon,
  title,
  count,
  total,
  paid,
  pending,
}) {
  return (
    <Card className="text-align-left min-h-90">
      <CardHeader className="d-flex align-items-start py-1 justify-content-start flex-column my-0 gap-1">
        <div
          style={{
            backgroundColor: "#cce6ff",
            padding: "10px 6px",
            borderRadius: "5px",
          }}
        >
          <Icon className="text-primary" size={30} />
        </div>
        <CardTitle className="fw-bold col-sm-12 no-wrap">
          <small>{title}</small>
        </CardTitle>
      </CardHeader>
      {title === "Payment Status" ? (
        <CardBody className="fw-bold fs-4">
          <p>{paid} Completed</p>
          <p> {pending} Pending</p>
        </CardBody>
      ) : (
        <CardBody className="fw-bold fs-4">
          {count}
          {total !== undefined && `/${total}`}
        </CardBody>
      )}
    </Card>
  );
}
