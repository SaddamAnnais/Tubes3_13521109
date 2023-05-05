import React from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure, ModalCloseButton, Text } from "@chakra-ui/react";

function ErrorModal(props) {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={props.isOpen}>
        <ModalOverlay />
        <ModalContent borderRadius="xl" >
          <ModalHeader bgColor="teal" borderTopRadius="xl" color="white" fontWeight="bold" >An Error Occured</ModalHeader>
          <ModalBody pb={6}>
            <Text >{props.msg}. Please reload the page</Text>
          </ModalBody>
          <ModalFooter>
            <Button bgColor="teal.400" color="white" onClick={handleReload}>Reload</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ErrorModal;