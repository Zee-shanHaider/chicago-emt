import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function MyModal({
  toggle,
  size = "sm",
  modal,
  setModal,
  buttonText,
  children,
}) {
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {buttonText}
      </Button>
      <Modal size={size} isOpen={modal} toggle={toggle} unmountOnClose={false}>
        <ModalHeader toggle={toggle}>{buttonText}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={() => setModal(false)}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
}

export default MyModal;
