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
import SendMsgBox from "./SendMsgBox";
import ChatMessages from "./ChatMessages/ChatMessages";

function Chat(props) {
  return (
    <Flex
      w="100%"
      maxH="100vh"
      direction="column"
      spacing="0"
      position="relative"
    >
      <ChatMessages />
      {/* <Flex w="full" h="20rem" bgColor="transparent"/> */}
      <SendMsgBox />
    </Flex>
  );
}

export default Chat;
