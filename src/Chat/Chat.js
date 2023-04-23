import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

function Chat(props) {
  const [rows, setRows] = useState(1);

  function handleTextHeight(event) {
    const textareaLineHeight = 25;
    const previousRows = event.target.rows;
    event.target.rows = 1;
    const currentRows = Math.floor(
      event.target.scrollHeight / textareaLineHeight
    );

    console.log("currentRows = " + currentRows);
    console.log("rows = " + rows);
    if (currentRows !== previousRows && currentRows < 5) {
      setRows(currentRows);
    } else if (currentRows > 4) {
      event.target.rows = 4;
    } else {
      event.target.rows = previousRows;
    }
  }

  return (
    <Flex w="100%" direction="column">
      <Spacer />
      <HStack w="100%" mb="1.5rem" zIndex="modal">
        <Spacer />
        <Textarea
          placeholder="Send a message..."
          size="lg"
          bgColor="#40414F"
          color="white"
          borderColor="black"
          w={["100%", "90%", "80%", "70%"]}
          minH="3rem"
          onInput={handleTextHeight}
          rows={rows}
          resize="none"
        />
        <IconButton
          h="3rem"
          w="3rem"
          colorScheme="teal"
          icon={<Icon as={RiSendPlaneFill} boxSize="1rem" />}
        />
        <Spacer />
      </HStack>
    </Flex>
  );
}

export default Chat;
