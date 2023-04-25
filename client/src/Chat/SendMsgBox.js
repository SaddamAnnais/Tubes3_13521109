import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

function SendMsgBox(props) {
  const [rows, setRows] = useState(1);

  function handleTextHeight(event) {
    const textareaLineHeight = 25;
    const previousRows = event.target.rows;
    event.target.rows = 1;
    const currentRows = Math.floor(
      event.target.scrollHeight / textareaLineHeight
    );
    if (currentRows !== previousRows && currentRows < 5) {
      setRows(currentRows);
    } else if (currentRows > 4) {
      event.target.rows = 4;
    } else {
      event.target.rows = previousRows;
    }
  }

  return (
    <HStack
      position="absolute"
      bottom="0"
      zIndex="modal"
      w="full"
      pb="1.5rem"
      pt="3rem"
      bgGradient="linear(to-b, transparent 0%, rgba(52, 53, 65, 1) 70%)"
      m="0"
    >
      <Spacer />
      <Textarea
        placeholder="Send a message..."
        size="lg"
        bgGradient="linear(to-b, #40414F, #40414F)"
        color="white"
        borderColor="black"
        w={["100%", "90%", "80%", "70%"]}
        minH="3rem"
        onInput={handleTextHeight}
        rows={rows}
        resize="none"
        _hover={{ boderColor: "black" }}
      />
      <IconButton
        h="3rem"
        w="3rem"
        colorScheme="teal"
        icon={<Icon as={RiSendPlaneFill} boxSize="1.4rem" />}
      />
      <Spacer />
    </HStack>
  );
}

export default SendMsgBox;
