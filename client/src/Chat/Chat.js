import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import SendMsgBox from "./SendMsgBox";
import ChatMessages from "./ChatMessages/ChatMessages";
import EmptyMessages from "./ChatMessages/EmptyMessages";

function Chat(props) {
  const chatContent = (status) => {
    if (status.loading) return <Spinner m="auto" color="teal.200" />;
    else if (props.newChat) return <EmptyMessages />;
    return (
      <ChatMessages
        data={props.data}
        key={props.id}
        chatEffect={props.chatEffect}
      />
    );
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
      <SendMsgBox
        newUsrMsg={(msg) => props.newUsrMsg(msg)}
        canSendMessage={props.canSendMessage}
      />
    </Flex>
  );
}

export default Chat;
