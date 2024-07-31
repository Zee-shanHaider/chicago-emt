import React from "react";
import { Button } from "reactstrap";

const MyButton = ({ text }) => {
  return (
    <div>
      <Button color="primary">{text}</Button>
    </div>
  );
};

export default MyButton;
