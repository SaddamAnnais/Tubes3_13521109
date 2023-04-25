import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import SendMsgBox from "./SendMsgBox";
import ChatMessages from "./ChatMessages/ChatMessages";
import EmptyMessages from "./ChatMessages/EmptyMessages";

function Chat(props) {
  const chatContent = (status) => {
    if (status.loading) {
      return <Spinner m="auto" color="white" />;
    } else if (status.error) {
      return (
        <Text color="red.500" m="auto">
          {status.msg}
        </Text>
      );
    } else {
      return (
        <>
          <EmptyMessages />
          {/* tambahin untuk bukan empty messages */}
        </>
      );
    }
  };

  return (
    <Flex
      w="100%"
      maxH="100vh"
      direction="column"
      spacing="0"
      position="relative"
    >
      {chatContent(props.status)}
      <SendMsgBox />
    </Flex>
  );
}

export default Chat;
